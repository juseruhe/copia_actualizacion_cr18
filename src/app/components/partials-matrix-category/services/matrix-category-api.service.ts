import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* API */
import { MatrixCategoryService } from '@api/matrix-category/matrix-category.service';

/* Interfaces */
import { IApiCrud } from '@component/crud-modal/interfaces/IApiCrud';
import { IResponse } from '@interface/IResponse';

@Injectable()
export class MatrixCategoryApiService implements IApiCrud {

  constructor(
    private matrixCategoryService: MatrixCategoryService
  ) {}

  async create(record: any): Promise<IResponse> {
    return this.matrixCategoryService.create(record);
  }

  async update(record: any): Promise<IResponse> {
    return this.matrixCategoryService.update(record);
  }

  async delete(record: any): Promise<IResponse> {
    return this.matrixCategoryService.delete(record);
  }

  async prepare(form: FormGroup, data: any): Promise<any> {
    const record = Object.assign(form.value);
    return record;
  }

}
