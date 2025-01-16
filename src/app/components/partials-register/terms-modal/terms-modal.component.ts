import { Component, Input } from '@angular/core';

/**
 * Libraries
 */
import { ModalCore } from '@classes/ModalCore';

@Component({
  selector: 'app-terms-modal',
  templateUrl: './terms-modal.component.html',
  styleUrls: ['./terms-modal.component.scss']
})
export class TermsModalComponent extends ModalCore {

  title = 'Habeas data y política de tratamiento de datos';

  constructor() {
    super();
  }

  accept() {
    this.closeModal(this.data);
  }


}
