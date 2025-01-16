import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

/* Classes */
import { ModalCore } from '@classes/ModalCore';

/* Services */
import { ApiCrudManageService } from '../services/api-crud-manage.service';
// import { ApiManageService } from '../services/api-manage.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss'],
/*   providers: [
    ApiCrudManageService,
    ApiManageService
  ] */
})
export class DeleteModalComponent extends ModalCore {

  @Input() title: string;
  @Input() description = '¿Estás seguro de realizar esta acción?';
  @Input() data: any = {};

  constructor(
    private apiCrudManageService: ApiCrudManageService,
    private toastrService: ToastrService
  ) {
    super();
  }

  async delete() {
    try {
      if (this.loader) {
        return;
      }
      this.loader = true;
      const response = await this.apiCrudManageService.apiManageService.delete(this.data.record);
      this.closeModal(response.data);
      this.toastrService.success(`Registro elminado con éxito.`, 'Felicidades!');
    } catch (error) {
      console.warn('Error@DeleteModalComponent@delete:', error);
    }
    this.loader = false;
  }

}
