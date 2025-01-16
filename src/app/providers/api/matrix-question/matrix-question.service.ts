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
export class MatrixQuestionService extends ApiServiceCore {

  /* API simulation */
  protected override simulation: Simulation = new Simulation();

  /* Endpoint */
  protected override endpoint = '/private/matrixQuestion';

  /* Key module */
  protected override keyModule = 'matrixQuestion';

  constructor(
    protected override restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

}
