import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * Libraries
 */
import { ModalCore } from '@classes/ModalCore';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.sass']
})
export class ConfirmModalComponent extends ModalCore {

  @Input() title: string;
  @Input() description: string;
  @Input() data: any;
  @Input() acceptText = 'Aceptar';
  @Input() acceptColor = 'primary';

  constructor() {
    super();
  }

  accept() {
    this.closeModal(this.data);
  }

}
