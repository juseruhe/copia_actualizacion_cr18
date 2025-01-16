import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from '@env/environment';

/**
 * Classes
 */
import { IResponse } from '@interface/IResponse';

@Injectable({
  providedIn: 'root'
})
export class RestMiddlewareService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * Execute GET request
   * @param route: Route of backend api
   * @param options: Option request object
   */
  getRequest(route: string, options: {} = {}): Promise<IResponse> {
    return this.http.get(this.getUrl(route), options).toPromise();
  }

  /**
   * Execute POST request
   * @param route: Route of backend api
   * @param body: Body object
   * @param options: Option request object
   */
  postRequest(route: string, body: any, options: {} = {}): Promise<IResponse> {
    return this.http.post(this.getUrl(route), body, options).toPromise();
  }

  /**
   * Execute PUT request
   * @param route: Route of backend api
   * @param body: Body object
   * @param options: Option request object
   */
  putRequest(route: string, body: any, options: {} = {}): Promise<IResponse> {
    return this.http.put(this.getUrl(route), body, options).toPromise();
  }

  /**
   * Execute PATCH request
   * @param route: Route of backend api
   * @param body: Body object
   * @param options: Option request object
   */
  patchRequest(route: string, body: any, options: {} = {}): Promise<IResponse> {
    return this.http.patch(this.getUrl(route), body, options).toPromise();
  }

  /**
   * Execute DELETe request
   * @param route: Route of backend api
  * @param options: Option request object
   */
  deleteRequest(route: string, options: {} = {}): Promise<IResponse> {
    return this.http.delete(this.getUrl(route), options).toPromise();
  }

  /**
   * Prepare url from route endpooint
   */
  getUrl(route: string): string {
    return `${environment.api}${route}`;
  }

  /**
   * Get HttpClient object
   */
  getHttp(): HttpClient {
    return this.http;
  }

}
