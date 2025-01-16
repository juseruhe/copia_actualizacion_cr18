import { Injectable } from '@angular/core';

/* Classes */
import { ApiServiceCore } from '@classes/ApiServiceCore';
import { IResponse } from '@interface/IResponse';

/* Services */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/* Simulation */
import { Simulation } from './simulation';

@Injectable({
  providedIn: 'root'
})
export class MatrixGroupService extends ApiServiceCore {

  /* API simulation */
  protected override simulation: Simulation = new Simulation();

  /* Endpoint */
  protected override endpoint = '/private/matrixGroup';

  /* Key module */
  protected override keyModule = 'matrixGroup';

  constructor(
    protected override restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

  async getMaturityMatrix(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getMaturityMatrix();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/currentPeriod`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getAdminMaturityMatrix(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getAdminMaturityMatrix();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/nextPeriod`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
