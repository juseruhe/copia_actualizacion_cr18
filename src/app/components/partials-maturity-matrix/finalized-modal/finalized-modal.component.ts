import { Component, OnInit } from '@angular/core';

/* Classes */
import { ModalCore } from '@classes/ModalCore';

@Component({
  selector: 'app-finalized-modal',
  templateUrl: './finalized-modal.component.html',
  styleUrls: ['./finalized-modal.component.scss']
})
export class FinalizedModalComponent extends ModalCore  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
