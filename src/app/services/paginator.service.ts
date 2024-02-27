import { Injectable } from '@angular/core';
import { MatPaginator } from "@angular/material/paginator";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaginatorService {

  constructor() { }

  public paginationConfig = new BehaviorSubject({
    pageSize: 10,
    offset: 0
  })

  private _paginatorInstance?: MatPaginator;

  public setPaginatorInstance(paginator: MatPaginator) {
    if (!this._paginatorInstance) {
      this._paginatorInstance = paginator
    } else {
      throw new Error('Paginator instance already exist')
    }
  }

  public removePaginatorInstance() {
    throw new Error('Method has not yet been implemented')
  }

  public resetPaginatorIndex() {
    this._paginatorInstance?.firstPage()
  }
}
