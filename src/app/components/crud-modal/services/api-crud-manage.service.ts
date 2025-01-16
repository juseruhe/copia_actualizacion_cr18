import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

/* Services */
import { ApiManageService } from './api-manage.service';

@Injectable()
export class ApiCrudManageService {

  public record: any;

  public form: FormGroup;

  public data: any;

  constructor(
    public apiManageService: ApiManageService
  ) {}

  async prepareForm(): Promise<void> {
    if (this.record?.id) {
      const response = this.apiManageService.prepareForm ?
      (await this.apiManageService.prepareForm(this.form, this.record)) : this.automaticPrepareForm();
    }
  }

  private automaticPrepareForm(): boolean {
    for (const key in this.form.controls) {
      if (Object.prototype.hasOwnProperty.call(this.form.controls, key)) {
        this.form.controls[key].patchValue(this.record[key]);
      }
    }
    return true;
  }

  async prepareBody(): Promise<any> {
    const record = this.apiManageService.prepare ? (await this.apiManageService.prepare(this.form, this.data)) : this.form.value;
    return record;
  }

}
