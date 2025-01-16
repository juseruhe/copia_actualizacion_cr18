import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* API */
import { MatrixTopicService } from '@api/matrix-topic/matrix-topic.service';

/* Interfaces */
import { IApiCrud } from '@component/crud-modal/interfaces/IApiCrud';
import { IResponse } from '@interface/IResponse';

@Injectable()
export class MatrixTopicApiService implements IApiCrud {

  constructor(
    private matrixTopicService: MatrixTopicService
  ) {}

  async create(record: any): Promise<IResponse> {
    return this.matrixTopicService.create(record);
  }

  async update(record: any): Promise<IResponse> {
    return this.matrixTopicService.update(record);
  }

  async delete(record: any): Promise<IResponse> {
    return this.matrixTopicService.delete(record);
  }

  async prepare(form: FormGroup, data: any): Promise<any> {
    const record = Object.assign(form.value, { matrixDimensionId: data.parent.id });
    return record;
  }

}
