import { Injectable } from '@angular/core';

/* Classes */
import { ApiServiceCore } from '@classes/ApiServiceCore';

/* Services */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/* Simulation */
import { Simulation } from './simulation';

@Injectable({
  providedIn: 'root'
})
export class CityService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/city';

  /* Key module */
  protected keyModule = 'city';

  constructor(
    protected restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

}
