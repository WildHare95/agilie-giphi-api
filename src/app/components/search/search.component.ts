import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { GiphyService } from "../../services/giphy.service";
import { debounceTime, Observable, of, switchMap } from "rxjs";
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from "@angular/material/autocomplete";
import {IAutocompleteResponse, PaginatorEnum} from "../../models/models";
import { MatSnackBar } from "@angular/material/snack-bar";
import { PaginatorService } from "../../services/paginator.service";

@Component({
  selector: 'agilie-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent {
  @ViewChild(MatAutocompleteTrigger) autocompleteTrigger?: MatAutocompleteTrigger;
  public paginationOption = PaginatorEnum
  public searchControl = new FormControl('');
  public filteredOpt: Observable<IAutocompleteResponse[]>

  constructor(
    private _paginatorService: PaginatorService,
    public giphyService: GiphyService,
    private _snackBar: MatSnackBar,
  ) {


    this.filteredOpt = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(term => {
        if (!term) {
          return of([])
        }
        return this.giphyService.autoCompleteSearch(term)
      })
    )
  }

  public selectOption(event: MatAutocompleteSelectedEvent) {
    this.giphyService.searchGifs(event.option.value)
  }

  public submit(event?: Event) {
    event?.preventDefault()
    if (!this.searchControl.value) {
      this._snackBar.open('The input line cannot be empty', 'OK')
      return
    }
    this.giphyService.search$.next(this.searchControl.value)
    this._paginatorService.currentTab$.next(1)
    this.autocompleteTrigger?.closePanel()
  }

  public resetSearch() {
    this._paginatorService.currentTab$.next(0)
    this.searchControl.reset()
    this._paginatorService.resetPaginatorIndex(this.paginationOption.SEARCH)
    this.giphyService.search$.next(this.searchControl.value)
  }
}
