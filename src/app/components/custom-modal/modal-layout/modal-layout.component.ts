import { Component, OnInit, TemplateRef, ContentChild, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-layout',
  templateUrl: './modal-layout.component.html',
  styleUrls: ['./modal-layout.component.scss']
})
export class ModalLayoutComponent implements OnInit {

  /* Modal title */
  @Input() title = '';

  /* Header content template */
  @ContentChild('headerContent') headerContentTmpl: TemplateRef<any>;

  /* Body content template */
  @ContentChild('bodyContent') bodyContentTmpl: TemplateRef<any>;

  /* Footer content template */
  @ContentChild('footerContent') footerContentTmpl: TemplateRef<any>;

  constructor(
    public modal: NgbActiveModal
  ) { }

  ngOnInit() {
  }

  /**
   * Close modal component
   */
  closeModal(response: any = null): void {
    this.modal.close(response);
  }

}
