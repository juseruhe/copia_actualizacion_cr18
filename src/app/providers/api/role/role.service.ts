import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Classes */
import { ApiServiceCore } from '@classes/ApiServiceCore';

/* Services */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

/* Simulation */
import { Simulation } from './simulation';

@Injectable({
  providedIn: 'root'
})
export class RoleService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation;

  /* Endpoint */
  protected endpoint = '/private/role';

  /* Key module */
  protected keyModule = 'role';

  constructor(
    protected restMiddleware: RestMiddlewareService,
    protected storageService: StorageService
  ) {
    super(restMiddleware);
    this.simulation = new Simulation(storageService);
  }

  async checkRole(roleId: number[]) {
    try {
      if (this.SIMULATION) {
        return this.simulation.checkRole(roleId);
      }
      let params: HttpParams = new HttpParams();
      params = params.set('ids', roleId.join(','));
      const options = { params };

      const response = await this.restMiddleware.getRequest(`${this.endpoint}/check`, options);
      return response;
    } catch (error) {
      throw error;
    }
  }

}
