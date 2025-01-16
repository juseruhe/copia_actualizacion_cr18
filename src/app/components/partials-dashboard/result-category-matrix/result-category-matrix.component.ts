import { Component, Input, OnInit } from '@angular/core';
import { MatrixDimensionResponseService } from '@api/matrix-dimension-response/matrix-dimension-response.service';
import { MatrixResponseService } from '@api/matrix-response/matrix-response.service';
import { HtmlToImageService } from '@service/htmt-to-image/html-to-image.service';

@Component({
  selector: 'app-result-category-matrix',
  templateUrl: './result-category-matrix.component.html',
  styleUrls: ['./result-category-matrix.component.scss']
})
export class ResultCategoryMatrixComponent implements OnInit {

  loader = false;

  prepare = false;

  @Input() resultCategory: {
    category?: string;
    categoryName?: string;
  } = {};

  resultCapacity: {
    relevance?: number 
  } = {};

  capacityList: any[] = [
    "PRE-BIM", "MODELADO","COLABORACIÓN","INTEGRACIÓN","POST-BIM"
  ]

  capacityName: string 

  resolution: number = window.innerWidth;


  constructor(
    private matrixDimensionResponseService: MatrixDimensionResponseService,
    private matrixResponseService: MatrixResponseService,
    private htmlToImageService: HtmlToImageService
  ) { }

  ngOnInit(): void {
    this.getRelevance();


  }

  private async getRelevance(): Promise<void> {
    try {
      const response = await this.matrixDimensionResponseService.getRelevance();
      console.log("relevance: " + response)
      this.resultCapacity = response.data;
      this.capacityName = this.capacityList[this.resultCapacity.relevance]
      
    } catch (error) {
     console.warn('Error@DashboardComponent@getRelevance:', error);
    }
  } 

  async donwload() {
    try {
      this.loader = true;
      this.prepare = false;
    
      const bimCard = await this.htmlToImageService.getPng('#bim-card');
      const capacityCard = await this.htmlToImageService.getPng('#capacity-card');
      const chartCard = await this.htmlToImageService.getPng('#chart-card')
      this.prepare = true;
      await this.matrixResponseService.getResultReport(bimCard, capacityCard, chartCard,this.resolution);
    } catch (error) {
      console.warn('Error@ResultMatrixComponent@donwload:', error);
    }
    this.loader = false;
  }

}
