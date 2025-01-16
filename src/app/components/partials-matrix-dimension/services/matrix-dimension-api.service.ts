import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* API */
import { MatrixDimensionService } from '@api/matrix-dimension/matrix-dimension.service';

/* Interfaces */
import { IApiCrud } from '@component/crud-modal/interfaces/IApiCrud';
import { IResponse } from '@interface/IResponse';

@Injectable()
export class MatrixDimensionApiService implements IApiCrud {

  constructor(
    private matrixDimensionService: MatrixDimensionService
  ) {}

  async create(record: any): Promise<IResponse> {
    return this.matrixDimensionService.create(record);
  }

  async update(record: any): Promise<IResponse> {
    return this.matrixDimensionService.update(record);
  }

  async delete(record: any): Promise<IResponse> {
    return this.matrixDimensionService.delete(record);
  }

  async prepare(form: FormGroup, data: any): Promise<any> {
    const record = Object.assign(form.value, { matrixSubgroupId: data.parent.id });
    return record;
  }

}
