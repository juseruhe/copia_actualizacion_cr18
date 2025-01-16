import { AfterContentInit, AfterViewChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/* API */
import { UploadService } from '@api/upload/upload.service';

/* Components */
import { RoadMapModalComponent } from '@component/partials-road-map/road-map-modal/road-map-modal.component';

@Component({
  selector: 'app-road-map',
  templateUrl: './road-map.component.html',
  styleUrls: ['./road-map.component.scss']
})
export class RoadMapComponent implements OnInit {

  slideShow: any;

  constructor(
    private modalService: NgbModal,
    private uploadService: UploadService
  ) { }

  ngOnInit(): void {
  }
  async downloadBimKit() {
    try {
      await this.uploadService.staticFile('bim-kit.zip');
    } catch (error) {
      console.warn('', error);
    }
  }

  async open() {
    const modalRef = this.modalService.open(RoadMapModalComponent, {
      size: 'lg',
      windowClass: 'road-map-modal'
    });
  }
}
