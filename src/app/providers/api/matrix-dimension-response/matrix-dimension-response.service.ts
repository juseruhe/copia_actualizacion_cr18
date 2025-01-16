import { Injectable } from '@angular/core';

/* Classes */
import { ApiServiceCore } from '@classes/ApiServiceCore';

/* Services */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/* Simulation */
import { Simulation } from './simulation';

/* Interfaces */
import { IResponse } from '@interface/IResponse';

@Injectable({
  providedIn: 'root'
})
export class MatrixDimensionResponseService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/private/matrixDimensionResponse';

  /* Key module */
  protected keyModule = 'matrixDimensionResponse';

  constructor(
    protected restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

  async getRelevance() {
    try {
      if (this.SIMULATION) {
        return this.simulation.getRelevance();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/result/capacity`,);
      return response;
    } catch (error) {
      throw error;
    }
  }
}