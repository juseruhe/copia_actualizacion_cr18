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
export class RegionalService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/private/regional';

  /* Key module */
  protected keyModule = 'regional';

  constructor(
    protected restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

}
