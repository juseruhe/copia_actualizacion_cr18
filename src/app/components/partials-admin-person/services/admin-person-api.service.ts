import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* API */
import { PersonService } from '@api/person/person.service';

/* Interfaces */
import { IApiCrud } from '@component/crud-modal/interfaces/IApiCrud';
import { IResponse } from '@interface/IResponse';

/* Models */
import { User } from '@model/User';

@Injectable()
export class AdminPersonApiService implements IApiCrud {

  mocos = true;

  constructor(
    private personService: PersonService
  ) {}

  async create(record: User): Promise<IResponse> {
    return this.personService.create(record);
  }

  async update(record: User): Promise<IResponse> {
    return this.personService.update(record);
  }

  async delete(record: User): Promise<IResponse> {
    return this.personService.delete(record);
  }

  async prepare(form: FormGroup, data: any): Promise<any> {
    const record = Object.assign(form.getRawValue(), { terms: true });
    record.belongsBim = record.belongsBim === true;
    return record;
  }

  async prepareForm(form: FormGroup, record: any): Promise<any> {
    for (const key in form.controls) {
      if (Object.prototype.hasOwnProperty.call(form.controls, key)) {
        form.controls[key].patchValue(record[key]);
      }
    }
    form.controls.email.patchValue(record?.user.email);
    return true;
  }

}
