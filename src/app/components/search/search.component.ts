import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { FormControl } from "@angular/forms";
import { GiphyService } from "../../services/giphy.service";
import { debounceTime, Observable, of, switchMap } from "rxjs";
import { MatAutocompleteSelectedEvent, MatAutocompleteTrigger } from "@angular/material/autocomplete";
import { IAutocompleteResponse } from "../../models/models";
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
    this._paginatorService.paginationConfig.next({
      offset: 0,
      pageSize: this._paginatorService.paginationConfig.getValue().pageSize
    })
    this.giphyService.search$.next(this.searchControl.value)
    this._paginatorService.resetPaginatorIndex()
    this.autocompleteTrigger?.closePanel()
  }

  public resetSearch() {
    this.searchControl.reset()
    this._paginatorService.resetPaginatorIndex()
    this.giphyService.search$.next(this.searchControl.value)
  }
}
