import { FormGroup } from '@angular/forms';

/* Interfaces */
import { IResponse } from '@interface/IResponse';

export interface IApiCrud {
  prepare?: (form: FormGroup, data: any) => Promise<any>;
  prepareForm?: (form: FormGroup, record: any) => Promise<any>;
  create(record: any): Promise<IResponse>;
  update(record: any): Promise<IResponse>;
  delete(record: any): Promise<IResponse>;
}
