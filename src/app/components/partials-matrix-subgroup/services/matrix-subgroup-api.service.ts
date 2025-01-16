import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* API */
import { MatrixSubgroupService } from '@api/matrix-subgroup/matrix-subgroup.service';

/* Interfaces */
import { IApiCrud } from '@component/crud-modal/interfaces/IApiCrud';
import { IResponse } from '@interface/IResponse';

@Injectable()
export class MatrixSubgroupApiService implements IApiCrud {

  constructor(
    private matrixSubgroupService: MatrixSubgroupService
  ) {}

  async create(record: any): Promise<IResponse> {
    return this.matrixSubgroupService.create(record);
  }

  async update(record: any): Promise<IResponse> {
    return this.matrixSubgroupService.update(record);
  }

  async delete(record: any): Promise<IResponse> {
    return this.matrixSubgroupService.delete(record);
  }

  async prepare(form: FormGroup, data: any): Promise<any> {
    const record = Object.assign(form.value, { matrixGroupId: data.parent.id });
    return record;
  }

}
