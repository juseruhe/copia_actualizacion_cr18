import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { LocalDataSource, ServerDataSource } from 'ng2-smart-table';

/* Classes */
import { ApiServiceCore  } from '@classes/ApiServiceCore';

/**
 * Services
 */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';
import { DownloadManageService } from '@service/download-manage/download-manage.service';

/**
 * Simulation
 */
import { Simulation } from './simulation';

/* Interfaces */
import { IResponse } from '@interface/IResponse';
import { IPasswordData } from '@interface/IPasswordData';
import { ISearchFilter } from '@interface/ISearchFilter';
import { IPagination } from '@interface/IPagination';

/* Models */
import { Company } from '@model/Company';
import { Person } from '@model/Person';
import { AdminProfile } from '@model/AdminProfile';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService extends ApiServiceCore {

  /* API simulation */
  protected override simulation: Simulation = new Simulation();

  /* Endpoint */
  protected override endpoint = '/private/adminProfile';

  /* Key module */
  protected override keyModule = 'adminProfile';

  constructor(
    protected override restMiddleware: RestMiddlewareService,
    private downloadManageService: DownloadManageService
  ) {
    super(restMiddleware);
  }


  async paginate(): Promise<ServerDataSource | LocalDataSource> {
    try {
      if (this.SIMULATION) {
        const response = await this.simulation.getPagination();
        const source = new LocalDataSource();
        source.load(response.data.adminProfileList);
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

  async getExcel(): Promise<IResponse> {
    try {
      if (this.SIMULATION) {
        return this.simulation.getExcel();
      }
      const response: any = await this.restMiddleware.getRequest(`${this.endpoint}/file`, { responseType: 'blob' });
      await this.downloadManageService.byBuffer(response, 'usuarios-administracion.xlsx');
      return response;
    } catch (error) {
      throw error;
    }
  }
}
