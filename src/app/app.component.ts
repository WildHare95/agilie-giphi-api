import {AfterViewInit, ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { GiphyService } from "./services/giphy.service";
import { MatPaginator, PageEvent } from "@angular/material/paginator";
import { combineLatest, Observable, of, switchMap, tap } from "rxjs";
import {IGifsResponse, PaginatorEnum } from "./models/models";
import { PaginatorService } from "./services/paginator.service";
import { MatDialog } from "@angular/material/dialog";
import { NoResultsDialogComponent } from "./components/no-results-dialog/no-results-dialog.component";
import { MatTabGroup } from "@angular/material/tabs";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  public isLoading = false
  public isLoadingSearch = false

  public paginationOption = PaginatorEnum

  public trendingResults: Observable<IGifsResponse[]>
  public searchResults: Observable<IGifsResponse[] | null>

  @ViewChild('paginatorTrending') paginatorTrending!: MatPaginator;
  @ViewChild('paginatorSearch') paginatorSearch!: MatPaginator;
  @ViewChild("tabGroup", { static: false }) tabGroup!: MatTabGroup;

  constructor(
    public giphyService: GiphyService,
    public paginatorService: PaginatorService,
    public dialog: MatDialog
  ) {
    this.trendingResults =
      this.paginatorService.paginationConfigTrending
        .pipe(
          tap(() => this.isLoading = true),
          switchMap(({pageSize, offset}) => this.giphyService.getGifsTrending(pageSize, offset)),
          tap(() => this.isLoading = false),
        )


    this.searchResults =
      combineLatest(
        this.paginatorService.paginationConfigSearch,
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
    this.paginatorService.setPaginatorInstance(this.paginatorTrending, this.paginationOption.TRENDING)
    this.paginatorService.setPaginatorInstance(this.paginatorSearch, this.paginationOption.SEARCH)
    this.paginatorService.setTabGroup(this.tabGroup)
  }

  public selectPage(event: PageEvent, instanceName: string) {
    if (instanceName === this.paginationOption.SEARCH) {
      this.paginatorService.paginationConfigSearch.next({
        pageSize: event.pageSize,
        offset: event.pageIndex * event.pageSize
      })
    }

    if (instanceName === this.paginationOption.TRENDING) {
      this.paginatorService.paginationConfigTrending.next({
        pageSize: event.pageSize,
        offset: event.pageIndex * event.pageSize
      })
    }
  }

  changeTab(event: number) {
    this.paginatorService.currentTab$.next(event)
  }
}
