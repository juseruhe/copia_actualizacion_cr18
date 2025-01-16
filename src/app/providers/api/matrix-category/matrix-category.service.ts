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
export class MatrixCategoryService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/private/matrixCategory';

  /* Key module */
  protected keyModule = 'matrixCategory';

  constructor(
    protected restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

}
