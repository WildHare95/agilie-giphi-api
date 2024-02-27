import { Injectable } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { BehaviorSubject } from "rxjs";
import {MatTabGroup} from "@angular/material/tabs";

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor() { }

  public currentTab$ = new BehaviorSubject(0)
  public paginationConfigTrending = new BehaviorSubject({
    pageSize: 10,
    offset: 0
  })

  public paginationConfigSearch = new BehaviorSubject({
    pageSize: 10,
    offset: 0
  })

  private _paginatorInstance: {[key: string]: MatPaginator} = {};
  private _tabGroup!: MatTabGroup

  public setPaginatorInstance(paginator: MatPaginator, instanceName: string) {
    if (!this._paginatorInstance[instanceName]) {
      this._paginatorInstance[instanceName] = paginator
    } else {
      throw Error('Pagination instance already exist')
    }
  }

  public removePaginatorInstance() {
    throw new Error('Method has not yet been implemented')
  }

  public resetPaginatorIndex(paginatorInstance: string) {
    this._paginatorInstance[paginatorInstance].firstPage()
  }

  public setTabGroup(tabGroup: MatTabGroup) {
    this._tabGroup = tabGroup
  }

  public selectTab(tabIndex: number) {
    console.log(tabIndex)
    console.log(this._tabGroup.selectedIndex);
    this._tabGroup.selectedIndex = tabIndex
    console.log(tabIndex)
  }
}
