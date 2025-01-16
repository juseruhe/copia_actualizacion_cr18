import { Injectable } from '@angular/core';

/* Classes */
import { ApiServiceCore  } from '@classes/ApiServiceCore';

/**
 * Services
 */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/**
 * Simulation
 */
import { Simulation } from './simulation';

/* Interfaces */
import { IResponse } from '@interface/IResponse';
import { IPasswordData } from '@interface/IPasswordData';

/* Models */
import { Company } from '@model/Company';
import { Person } from '@model/Person';
import { AdminProfile } from '@model/AdminProfile';

@Injectable({
  providedIn: 'root'
})
export class UserService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/private/user';

  /* Key module */
  protected keyModule = 'user';

  constructor(
    protected restMiddleware: RestMiddlewareService
  ) {
    super(restMiddleware);
  }

  async getProfile(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getProfile();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/profile`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updateProfile(profile: Company | Person | AdminProfile): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.updateProfile(profile);
      }
      const body = profile;
      const response = await this.restMiddleware.putRequest(`${this.endpoint}/profile`, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async updatePassword(data: IPasswordData): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.updatePassword();
      }
      const body = data;
      const response = await this.restMiddleware.patchRequest(`${this.endpoint}/password`, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async adminCreate(record: any): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.create(record);
      }
      const body = record;
      const response = await this.restMiddleware.postRequest(`${this.endpoint}/admin`, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async adminUpdate(record: any): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.update(record);
      }
      const body = record;
      const response = await this.restMiddleware.putRequest(`${this.endpoint}/admin/${record.id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async adminDelete(record: any): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.delete(record);
      }
      const body = record;
      const response = await this.restMiddleware.deleteRequest(`${this.endpoint}/admin/${record.id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

}
