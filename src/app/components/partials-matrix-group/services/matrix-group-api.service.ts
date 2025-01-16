import { Injectable } from '@angular/core';

/* API */
import { MatrixGroupService } from '@api/matrix-group/matrix-group.service';

/* Interfaces */
import { IApiCrud } from '@component/crud-modal/interfaces/IApiCrud';
import { IResponse } from '@interface/IResponse';

@Injectable()
export class MatrixGroupApiService implements IApiCrud {

  constructor(
    private matrixGroupService: MatrixGroupService
  ) {}

  async create(record: any): Promise<IResponse> {
    return this.matrixGroupService.create(record);
  }

  async update(record: any): Promise<IResponse> {
    return this.matrixGroupService.update(record);
  }

  async delete(record: any): Promise<IResponse> {
    return this.matrixGroupService.delete(record);
  }

}
