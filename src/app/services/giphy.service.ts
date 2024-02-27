import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment.development'
import { BehaviorSubject, map, Observable, tap } from "rxjs";
import { IAutocompleteResponse, IGifsResponse, IResponse } from "../models/models";

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private _http: HttpClient) {}

  public search$ = new BehaviorSubject<string | null>('');
  public lengthTrending = new BehaviorSubject(0)
  public lengthSearch = new BehaviorSubject(0)

  public getGifsTrending(limit: number = 10, offset: number = 0): Observable<IGifsResponse[]> {
    return this._http
      .get<IResponse<IGifsResponse>>(`${environment.apiURL}/${environment.resource.gifs}/${environment.endpoints.trending}`, {
        params: new HttpParams()
          .set('limit', limit)
          .set('offset', offset)
      })
      .pipe(
        tap(response => this.lengthTrending.next(response.pagination.total_count)),
        map(response => response.data)
      )
  }

  public autoCompleteSearch(searchTerm: string): Observable<IAutocompleteResponse[]> {
    return this._http.get<IResponse<IAutocompleteResponse>>(`${environment.apiURL}/${environment.resource.gifs}/${environment.endpoints.autocomplete}`, {
      params: new HttpParams().set('q', searchTerm)
    }).pipe(
      map(response => response.data)
    )
  }

  public searchGifs(searchTerm: string, limit: number = 10, offset: number = 0): Observable<IGifsResponse[]> {
    return this._http.get<IResponse<IGifsResponse>>(`${environment.apiURL}/${environment.resource.gifs}/${environment.endpoints.search}`, {
      params: new HttpParams()
        .set('q', searchTerm)
        .set('limit', limit)
        .set('offset', offset)
    }).pipe(
        tap(response => this.lengthSearch.next(response.pagination.total_count)),
        map(response => response.data)
      )
  }
}


