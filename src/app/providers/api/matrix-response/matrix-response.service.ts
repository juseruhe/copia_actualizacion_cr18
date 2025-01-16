import { Injectable } from '@angular/core';

/* Classes */
import { ApiServiceCore } from '@classes/ApiServiceCore';

/* Services */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';
import { DownloadManageService } from '@service/download-manage/download-manage.service';

/* Simulation */
import { Simulation } from './simulation';

/* Interfaces */
import { IResponse } from '@interface/IResponse';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatrixResponseService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/private/matrixResponse';

  /* Key module */
  protected keyModule = 'matrixResponse';

  constructor(
    protected restMiddleware: RestMiddlewareService,
    private downloadManageService: DownloadManageService
  ) {
    super(restMiddleware);
  }

  async getResult(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getResult();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/result`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getResultCategory(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getResultCategory();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/result/category`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getGraphResult(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getGraphResult();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/graph`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getResultExcel(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getResultExcel();
      }
      const response: any = await this.restMiddleware.getRequest(`${this.endpoint}/result/file`, { responseType: 'blob' });
      await this.downloadManageService.byBuffer(response, 'evaluacion-ruta-bim.xlsx');
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getResultReport(
    bimCard: string,
    capacityCard: string,
    chartCard: string,
    resolution: number
  ): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getResultExcel();
      }
      const body = {
        bimCard,
        capacityCard,
        chartCard,
        resolution
      };
      const response: any = await this.restMiddleware.postRequest(`${this.endpoint}/result/report`, body,{ responseType: 'blob' });
      await this.downloadManageService.byBuffer(response, 'bim-user-report.pdf');
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getResultInformation(filters): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getResultInformation();
      }
      let params: HttpParams = new HttpParams();
      for (const key in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, key) && filters[key]) {
          params = params.set(key, filters[key].toString());
        }
      }
      const options = { params };

      const response = await this.restMiddleware.getRequest(`${this.endpoint}/information`, options);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getGlobalResultInformation(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getGlobalResultInformation();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/information/global`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getResultInfoExcel(filters): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getResultInfoExcel();
      }
      let params: HttpParams = new HttpParams();
      for (const key in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, key) && filters[key]) {
          params = params.set(key, filters[key].toString());
        }
      }
      const options = { params, responseType: 'blob'};
      const response: any = await this.restMiddleware.getRequest(`${this.endpoint}/information/file`, options);
      await this.downloadManageService.byBuffer(response, 'admin-evaluacion-ruta-bim.xlsx');
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getResultByPeriod(): Promise<ServerDataSource | LocalDataSource> {
    try {
      if (this.SIMULATION) {
        const response = await this.simulation.getResultByPeriod();
        const source = new LocalDataSource();
        source.load(response.data.resultList);
        return source;
      }

      return new ServerDataSource(this.restMiddleware.getHttp(), {
        endPoint: this.restMiddleware.getUrl(`${this.endpoint}/result/period`),
        sortDirKey: 'sort',
        sortFieldKey: 'sortField',
        pagerPageKey: 'page'
      });
    } catch (error) {
      throw error;
    }
  }

  async getResultByPeriodExcel(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getResultInfoExcel();
      }
      const response: any = await this.restMiddleware.getRequest(`${this.endpoint}/result/period/file`, { responseType: 'blob' });
      await this.downloadManageService.byBuffer(response, 'resultados-por-periodo.xlsx');
      return response;
    } catch (error) {
      throw error;
    }
  }

  async findUserType(id: number): Promise<IResponse>{
    try{
   const response = await this.restMiddleware.getRequest(`${this.endpoint}/${id}`)
   return response
    }catch(error){
      throw error
    }
  }
}
