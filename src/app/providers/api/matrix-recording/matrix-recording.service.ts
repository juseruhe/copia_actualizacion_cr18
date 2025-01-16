import { Injectable } from '@angular/core';

/* Classes */
import { ApiServiceCore } from '@classes/ApiServiceCore';
import { environment } from '@env/environment';
import { IResponse } from '@interface/IResponse';

/* Services */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/* Simulation */
import { Simulation } from './simulation';

@Injectable({
  providedIn: 'root'
})
export class MatrixRecordingService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/private/matrixRecording';

  /* Key module */
  protected keyModule = 'matrixRecording';

  constructor(
    protected restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

  async getCurrentPeriod(): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.getCurrentPeriod();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/currentPeriod`);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
