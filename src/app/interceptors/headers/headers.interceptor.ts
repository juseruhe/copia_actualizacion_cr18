import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Providers
 */
import { HttpHeaderService } from '@service/http-header/http-header.service';

/**
 * Interfaces
 */
import { IHeaders } from '@interface/IHeaders';

@Injectable({
  providedIn: 'root'
})
export class HeadersInterceptor implements HttpInterceptor {

  constructor(
    private httpHeaderService: HttpHeaderService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const headerList: IHeaders  = {};
    this.httpHeaderService.preparePublicHeaderList(headerList);
    this.httpHeaderService.preparePrivateHeaderList(headerList);
    this.httpHeaderService.prepareMethodHeaderList(request.method, headerList, request.headers);
    this.httpHeaderService.mergetHeaderList(request.headers, headerList);

    const newRequest = request.clone({
      headers: new HttpHeaders(headerList)
    });
    return next.handle(newRequest);
  }

}
