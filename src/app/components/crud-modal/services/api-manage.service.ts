import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* Interfaces */
import { IResponse } from '@interface/IResponse';
import { IApiCrud } from '../interfaces/IApiCrud';

@Injectable()
export class ApiManageService implements IApiCrud {

  constructor() {}

  async create(record: any): Promise<IResponse> { return {}; }

  async update(record: any): Promise<IResponse> { return {}; }

  async delete(record: any): Promise<IResponse> { return {}; }

  async prepare(form: FormGroup, data: any): Promise<any> {}

  async prepareForm(form: FormGroup, record: any): Promise<any> {}
}
