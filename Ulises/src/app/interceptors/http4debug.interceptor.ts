import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Debugging } from '../globals';

// var Debugging = window.location.port == "4200";

@Injectable()
export class Http4debugInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // if (Debugging && request.url.includes('alive')==false)
    //   console.log('http4debug. request IN  => ', request.url);

    const httpReq = request.clone({
      url: (!Debugging ? "" : "http://localhost:5050") + request.url
    });
    
    if (Debugging && request.url.includes('alive')==false)
      console.log('http4debug.', request.method, httpReq.url, Debugging);
    return next.handle(httpReq);
  }
}