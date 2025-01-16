import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* API */
import { UserService } from '@api/user/user.service';

/* Interfaces */
import { IApiCrud } from '@component/crud-modal/interfaces/IApiCrud';
import { IResponse } from '@interface/IResponse';

/* Models */
import { User } from '@model/User';

@Injectable()
export class AdminUserApiService implements IApiCrud {

  constructor(
    private userService: UserService
  ) {}

  async create(record: User): Promise<IResponse> {
    return this.userService.adminCreate(record);
  }

  async update(record: User): Promise<IResponse> {
    return this.userService.adminUpdate(record);
  }

  async delete(record: User): Promise<IResponse> {
    return this.userService.adminDelete(record);
  }

  async prepare(form: FormGroup, data: any): Promise<any> {
    const record = Object.assign(form.getRawValue());
    record.active = record.active === true;
    return record;
  }

  async prepareForm(form: FormGroup, record: any): Promise<any> {
    for (const key in form.controls) {
      if (Object.prototype.hasOwnProperty.call(form.controls, key)) {
        form.controls[key].patchValue(record[key]);
      }
    }
    form.controls.email.patchValue(record.user.email);
    form.controls.roleId.patchValue(record.user.roleId);
    return true;
  }

}
