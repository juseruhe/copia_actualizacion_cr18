import { ViewChild, Output, EventEmitter, Input } from '@angular/core';

/**
 * Components
 */
import { ModalLayoutComponent } from '@component/custom-modal/modal-layout/modal-layout.component';

export class ModalCore {

  @Input() data: any;
  @ViewChild('modalLayout') modalLayout: ModalLayoutComponent;

  @Output() responseEvent: EventEmitter<any> = new EventEmitter<any>();

  loader = false;

  constructor() {}

  /**
   * Close modal component
   * @param response: Response of close modal
   */
  closeModal(response: any = null): void {
    this.modalLayout.closeModal(response);
    this.responseEvent.emit(response);
  }

}
