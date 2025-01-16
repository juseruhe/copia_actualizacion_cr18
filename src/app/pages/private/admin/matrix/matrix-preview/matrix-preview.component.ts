import { Component, OnInit } from '@angular/core';

/* API */
import { MatrixGroupService } from '@api/matrix-group/matrix-group.service';

/* Services */
import { MaturityMatrix } from '@service/maturity-matrix/maturity-matrix';
import { StorageService } from '@util/storage/storage.service';

@Component({
  selector: 'app-matrix-preview',
  templateUrl: './matrix-preview.component.html',
  styleUrls: ['./matrix-preview.component.scss']
})
export class MatrixPreviewComponent implements OnInit {

  loaded = false;

  knowledge: number;

  constructor(
    private matrixGroupService: MatrixGroupService,
    public maturityMatrix: MaturityMatrix,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getMaturityMatrix();
    this.whereAreYou();
  }

  async getMaturityMatrix(): Promise<void> {
    try {
      const response = await this.matrixGroupService.getAdminMaturityMatrix();
      this.maturityMatrix.data.matrixGroupList = response.data.matrixGroupList;
      this.maturityMatrix.data.matrixResponseList = response.data.matrixResponseList || [];
      //this.maturityMatrix.init(true);
      this.maturityMatrix.init();
      this.loaded = true;
    } catch (error) {
      console.warn('Error@MatrixPreviewComponent@getMaturityMatrix:', error);
    }
  }

  async whereAreYou(){
    this.knowledge = await this.storageService.getKnowledge()
    }
  

}
