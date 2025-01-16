import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

/* Classes */
import { ModalCore } from '@classes/ModalCore';
import { IControlField } from '@interface/IControlField';

/* Services */
import { ApiCrudManageService } from '../services/api-crud-manage.service';

@Component({
  selector: 'app-create-edit-modal',
  templateUrl: './create-edit-modal.component.html',
  styleUrls: ['./create-edit-modal.component.scss']
})
export class CreateEditModalComponent extends ModalCore implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField;
  @Input() public name: string;

  @ContentChild('formContent') formContentTmpl: TemplateRef<any>;

  form: FormGroup;

  constructor(
    private apiCrudManageService: ApiCrudManageService,
    private fb: FormBuilder,
    private toastrService: ToastrService
  ) {
    super();
  }

  ngOnInit() {
    this.buildForm();
    this.apiCrudManageService.prepareForm();
  }

  /**
   * Build reactive form
   */
  private buildForm(): void {
    this.form = this.fb.group(this.controlField.fields);
    this.apiCrudManageService.record = this.data.record || {};
    this.apiCrudManageService.form = this.form;
    this.apiCrudManageService.data = this.data;
  }

  /**
   * Change enable form
   * @param value: value
   */
  private changeStateForm(value: boolean): void {
    if (!value) {
      this.loader = value;
      this.form.enable();
    } else {
      this.loader = value;
      this.form.disable();
    }
  }

  async onSubmit() {
    if (this.form.valid) {
      this.changeStateForm(true);
      try {
        const body = await this.apiCrudManageService.prepareBody();
        const record = this.apiCrudManageService.record;
        const response = await (record.id ?
          this.apiCrudManageService.apiManageService.update(Object.assign(body, {id: record.id})) :
          this.apiCrudManageService.apiManageService.create(body));
        this.toastrService.success(`${this.name} ${ record.id ? 'actualizado' : 'creado'} con éxito.`, 'Felicidades!');
        this.closeModal(response.data);
      } catch (error) {
        this.changeStateForm(false);
        console.warn('Error@CreateEditModalComponent@onSubmit:', error);
      }
    }
  }

}
