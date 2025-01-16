import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

/* Services */
import { MaturityMatrix } from '@service/maturity-matrix/maturity-matrix';

/* API */
import { MatrixGroupService } from '@api/matrix-group/matrix-group.service';
import { MatrixRecordingService } from '@api/matrix-recording/matrix-recording.service';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

/* Components */
import { FinalizedModalComponent } from '@component/partials-maturity-matrix/finalized-modal/finalized-modal.component';

@Component({
  selector: 'app-maturity-matrix',
  templateUrl: './maturity-matrix.component.html',
  styleUrls: ['./maturity-matrix.component.scss']
})
export class MaturityMatrixComponent implements OnInit {

  loaded = false;
  finishing = false;
  knowledge: number;

  constructor(
    private matrixGroupService: MatrixGroupService,
    public maturityMatrix: MaturityMatrix,
    private matrixRecordingService: MatrixRecordingService,
    private router: Router,
    private storageService: StorageService,
    private toastrService: ToastrService,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.getMaturityMatrix();
    this.whereAreYou()
  }

  async getMaturityMatrix(): Promise<void> {
    try {
      const response = await this.matrixGroupService.getMaturityMatrix();
      this.maturityMatrix.data.matrixGroupList = response.data.matrixGroupList;
      this.maturityMatrix.data.matrixResponseList = response.data.matrixResponseList;
      this.maturityMatrix.data.matrixDimensionResponseList = response.data.matrixDimensionResponseList;
      console.log(this.maturityMatrix.data);
      this.maturityMatrix.init();
      this.loaded = true;
    } catch (error) {
      console.warn('Error@MaturityMatrixComponent@getMaturityMatrix:', error);
    }
  }

  async finish(): Promise<void> {
    try {
      if (this.finishing) {
        return;
      }
      this.finishing =  true;
      const response = await this.matrixRecordingService.create({});
      this.storageService.setHasMatrixRecording(true);
      this.open();
    } catch (error) {
      console.warn('Error@MaturityMatrixComponent@finish:', error);
    }
  }

  async open() {
    const modalRef = this.modalService.open(FinalizedModalComponent);
    try {
      await modalRef.result;
    } catch (error) {}
    this.toastrService.success('Ruta BIM diligenciada con éxito.', 'Felicidades!');
    this.router.navigate(['/dashboard']);
  }

  async whereAreYou(){
  this.knowledge = await this.storageService.getKnowledge()
  }

}
