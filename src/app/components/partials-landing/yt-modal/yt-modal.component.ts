import { Component, OnInit } from '@angular/core';

/* Classes */
import { ModalCore } from '@classes/ModalCore';

@Component({
  selector: 'app-yt-modal',
  templateUrl: './yt-modal.component.html',
  styleUrls: ['./yt-modal.component.scss']
})
export class YtModalComponent extends ModalCore {
  title = '';
  constructor() {
    super();
  }

}
