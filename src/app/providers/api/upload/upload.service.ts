import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

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

@Injectable({
  providedIn: 'root'
})
export class UploadService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation = new Simulation();

  /* Endpoint */
  protected endpoint = '/private/upload';

  /* Key module */
  protected keyModule = 'upload';

  constructor(
    protected restMiddleware: RestMiddlewareService,
    private downloadManageService: DownloadManageService
  ) {
    super(restMiddleware);
  }

  async staticFile(fileName: string): Promise<boolean> {
    try {
      if (environment.simulation) {
        return this.simulation.staticFile();
      }
      const response: any = await this.restMiddleware.getRequest(`${this.endpoint}/${fileName}`, { responseType: 'blob' });
      await this.downloadManageService.byBuffer(response, fileName);
      return true;
    } catch (error) {
      throw error;
    }
  }
}
