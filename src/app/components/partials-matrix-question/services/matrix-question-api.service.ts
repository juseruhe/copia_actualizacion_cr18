import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* API */
import { MatrixQuestionService } from '@api/matrix-question/matrix-question.service';

/* Interfaces */
import { IApiCrud } from '@component/crud-modal/interfaces/IApiCrud';
import { IResponse } from '@interface/IResponse';

@Injectable()
export class MatrixQuestionApiService implements IApiCrud {

  constructor(
    private matrixQuestionService: MatrixQuestionService
  ) {}

  async create(record: any): Promise<IResponse> {
    return this.matrixQuestionService.create(record);
  }

  async update(record: any): Promise<IResponse> {
    return this.matrixQuestionService.update(record);
  }

  async delete(record: any): Promise<IResponse> {
    return this.matrixQuestionService.delete(record);
  }

  async prepare(form: FormGroup, data: any): Promise<any> {
    const record = Object.assign(form.value, { matrixTopicId: data.parent.id });
    record.matrixCategoryId = +record.matrixCategoryId;
    return record;
  }

}
