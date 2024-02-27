import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { GiphyService } from "./services/giphy.service";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { combineLatest, Observable, of, switchMap, tap } from "rxjs";
import { IGifsResponse } from "./models/models";
import { PaginatorService } from "./services/paginator.service";
import { MatDialog } from "@angular/material/dialog";
import { NoResultsDialogComponent } from "./components/no-results-dialog/no-results-dialog.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  public isLoading = false
  public isLoadingSearch = false

  public trendingResults: Observable<IGifsResponse[]>
  public searchResults: Observable<IGifsResponse[] | null>
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    public giphyService: GiphyService,
    public paginatorService: PaginatorService,
    public dialog: MatDialog
  ) {
    this.trendingResults =
      this.paginatorService.paginationConfig
        .pipe(
          tap(() => this.isLoading = true),
          switchMap(({pageSize, offset}) => this.giphyService.getGifsTrending(pageSize, offset)),
          tap(() => this.isLoading = false),
        )


    this.searchResults =
      combineLatest(
        this.paginatorService.paginationConfig,
        this.giphyService.search$
      ).pipe(
        tap(() => this.isLoadingSearch = true),
        switchMap<[{pageSize: number,offset: number }, string | null], Observable<IGifsResponse[] | null>>
        (([{offset,pageSize}, searchTerm]) => {
          if (!!searchTerm) {
            return this.giphyService.searchGifs(searchTerm, pageSize, offset)
          }
          return of(null)
        }),
        tap((data) => {
          if (data && !data.length) {
            this.dialog.open(NoResultsDialogComponent, {
              width: '250px',
            });
          }
        }),
        tap(() => this.isLoadingSearch = false),
      )
  }

  ngAfterViewInit(): void {
    if (!!this.paginator) {
      this.paginatorService.setPaginatorInstance(this.paginator)
    }
  }

  public selectPage(event: PageEvent) {
    this.paginatorService.paginationConfig.next({
      pageSize: event.pageSize,
      offset: event.pageIndex * event.pageSize
    })
  }
}
