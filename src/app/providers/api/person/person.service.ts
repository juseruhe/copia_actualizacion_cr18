import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { HttpParams } from '@angular/common/http';

/* Classes */
import { ApiServiceCore  } from '@classes/ApiServiceCore';

/* Interfaces */
import { IResponse } from '@interface/IResponse';

/**
 * Services
 */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';
import { DownloadManageService } from '@service/download-manage/download-manage.service';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

/**
 * Simulation
 */
import { Simulation } from './simulation';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends ApiServiceCore {

  /* API simulation */
  protected override simulation: Simulation;

  /* Endpoint */
  protected override endpoint = '/private/person';

  /* Key module */
  protected override keyModule = 'person';

  constructor(
    protected override restMiddleware: RestMiddlewareService,
    protected storageService: StorageService,
    private downloadManageService: DownloadManageService
  ) {
    super(restMiddleware);
    this.simulation = new Simulation(storageService);
  }

  async patchKnowledge(knowledge: number): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.patchKnowledge(knowledge);
      }
      const body = { knowledge };
      const response = await this.restMiddleware.patchRequest(`${this.endpoint}/knowledge`, body);
      this.storageService.setKnowledge(response.data.knowledge);
      this.storageService.setKnowledgeAt(response.data.knowledgeAt);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async paginate(): Promise<ServerDataSource | LocalDataSource> {
    try {
      if (this.SIMULATION) {
        const response = await this.simulation.getPagination();
        const source = new LocalDataSource();
        source.load(response.data.personList);
        return source;
      }

      return new ServerDataSource(this.restMiddleware.getHttp(), {
        endPoint: this.restMiddleware.getUrl(`${this.endpoint}/paginate`),
        sortDirKey: 'sort',
        sortFieldKey: 'sortField',
        pagerPageKey: 'page'
      });
    } catch (error) {
      throw error;
    }
  }

  async getExcel(filters?: any): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getExcel();
      }
      let params: HttpParams = new HttpParams();
      for (const key in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, key) && filters[key]) {
          params = params.set(key, filters[key].toString());
        }
      }
      const options = { params, responseType: 'blob'};
      const response: any = await this.restMiddleware.getRequest(`${this.endpoint}/file`, options);
      await this.downloadManageService.byBuffer(response, 'usuarios-personas.xlsx');
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getByFilter(
    filter: any
  ): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.getByFilter();
      }
      let params: HttpParams = new HttpParams();
      for (const key in filter) {
        if (Object.prototype.hasOwnProperty.call(filter, key) && filter[key]) {
          params = params.set(key, filter[key].toString());
        }
      }
      const options = { params };

      const response = await this.restMiddleware.getRequest(`${this.endpoint}/filter`, options);
      return response;
    } catch (error) {
      throw error;
    }
  }

}
