import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpParams
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment.development";

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const params = request.clone().params
      .append('api_key', environment.apiKey)
    const reqClone = request.clone({params})
    return next.handle(reqClone);
  }
}
