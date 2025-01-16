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
export class MatrixDimensionService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/private/matrixDimension';

  /* Key module */
  protected keyModule = 'matrixDimension';

  constructor(
    protected restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

}
