import { HttpParams } from '@angular/common/http';

/**
 * Libraries
 */
import { SimulationCore } from './SimulationCore';

/**
 * Services
 */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/**
 * Interfaces
 */
import { IResponse } from '@interface/IResponse';
import { IPagination } from '@interface/IPagination';
import { ISearchFilter } from '@interface/ISearchFilter';
import { environment } from '@env/environment';

export class ApiServiceCore {

  /* API simulation */
  protected simulation: SimulationCore;

  /* Endpoint */
  protected endpoint: string;

  /* Key module */
  protected keyModule = 'record';

  constructor(
    protected restMiddleware: RestMiddlewareService
  ) {}

  /**
   * Get configuration enviroment of simulation mode
   */
  protected get SIMULATION(): boolean {
    return environment.simulation;
  }

  /**
   * Get all record list
   */
  async getAll(): Promise<IResponse> {
    if (this.SIMULATION) {
      return this.simulation.getAll();
    }
    try {
      const response = await this.restMiddleware.getRequest(`${this.endpoint}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all record list by relationship
   * @param recordId: Identifier record
   * @param relationship: Relationship name to reference module
   */
  async getByRelationship(recordId: number, relationship: string): Promise<IResponse> {
    if (this.SIMULATION) {
      return this.simulation.getByRelationship();
    }
    try {
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/${relationship}/${recordId}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Create record
   * @param record: Body of record
   */
  async create(record: any): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.create(record);
      }
      const body = record;
      const response = await this.restMiddleware.postRequest(this.endpoint, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Update record
   * @param record: Body of record
   */
  async update(record: any): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.update(record);
      }
      const body = record;
      const response = await this.restMiddleware.putRequest(`${this.endpoint}/${record.id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get all record list by pagination
   * @param searchFilter: Search filter object
   * @param pagination: Pagination object
   */
  async getPagination(searchFilter: ISearchFilter, pagination: IPagination): Promise<IResponse> {
    if (this.SIMULATION) {
    return this.simulation.getPagination();
    }

    let params: HttpParams = new HttpParams();
    params = this.setPaginationParamList(params, searchFilter, pagination);
    const options = { params };

    try {
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/paginate`, options);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Prepare pagination param list
   * @param params: Http params object
   * @param searchFilter: Search filter object
   * @param pagination: Pagination object
   */
  protected setPaginationParamList(params: HttpParams, searchFilter: ISearchFilter, pagination: IPagination): HttpParams {
    params = params.set('page', pagination.page.toString());
    params = params.set('search', searchFilter.search);
    params = params.set('field', searchFilter.field);
    params = params.set('sort', searchFilter.sort || '');
    params = params.set('sortField', searchFilter.sortField || '');
    return params;
  }

  /**
   * Delete record
   * @param record: Body of record
   */
  async delete(record: any): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.delete(record);
      }
      const body = record;
      const response = await this.restMiddleware.deleteRequest(`${this.endpoint}/${record.id}`, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Get record by identifier
   * @param recordId: Identifier record
   */
  async getById(recordId: number): Promise<IResponse> {
    if (this.SIMULATION) {
      return this.simulation.getById();
    }
    try {
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/${recordId}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

}
