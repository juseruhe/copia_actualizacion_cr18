import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@api/auth/auth.service';
import { MatrixPublishService } from '@api/matrix-publish/matrix-publish.service';
import { MatrixResponseService } from '@api/matrix-response/matrix-response.service';
import { ModalCore } from '@classes/ModalCore';
import { ERole } from '@enum/role.enum';
import { IAdminMatrixInformation } from '@interface/IAdminMatrixInformation';
import { IGlobalMatrixInformation } from '@interface/IGlobalMatrixInformation';
import { IMatrixGraphData } from '@interface/IMatrixGraphData';
import { IMatrixResponseData } from '@interface/IMatrixResponseData';
import { MatrixPublish } from '@model/MatrixPublish';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HtmlToImageService } from '@service/htmt-to-image/html-to-image.service';
import { CategoryResultService } from '@util/category-result/category-result.service';
import { StorageService } from '@util/storage/storage.service';

@Component({
  selector: 'app-report-modal',
  templateUrl: './report-modal.component.html',
  styleUrls: ['./report-modal.component.css']
})

export class ReportModalComponent implements OnInit{
    isAdmin: boolean;
  subtitle: string;
  downloadStatus = false

  data: IAdminMatrixInformation = {};
  cards: {
    name: string;
    value: number;
    icon: string;
  }[] = [];

  globalData: IGlobalMatrixInformation = {};
  globalCards: {
    name: string;
    value: number;
    icon: string;
  }[] = [];

  loader = true;

  resultCategory = {};

  filters: any = {};
  matrixPublishList: MatrixPublish[] = [];
  matrixPublishList2: MatrixPublish[] = [];
  prepare = false;

  resolution: number = window.innerWidth

  constructor( private storageService: StorageService,
    private matrixResponseService: MatrixResponseService,
    private categoryResultService: CategoryResultService,
    private matrixPublishService: MatrixPublishService,
    private htmlToImageService: HtmlToImageService,
    private modalService: NgbModal,
    private authService: AuthService,
    private router: Router) {
      this.subtitle = 'This is some text within a card block.';
      
     }
  
  ngOnInit(): void {
 
    this.isAdmin = this.storageService.getRole() !== ERole.USER;
   
        if (this.isAdmin) {
          this.getGlobalResultInformation();
        }

      
      }
    
      ngAfterViewInit(): void {
        
      }
    
      private prepareGlobalCards(): void {
        this.globalCards = [
          {
            name: 'Total Empresas registradas',
            value: this.globalData.cards.companyAmount,
            icon: 'company'
          },
          {
            name: 'Total Personas registradas',
            value: this.globalData.cards.personAmount,
            icon: 'person'
          },
          {
            name: 'Total Matrices completadas',
            value: this.globalData.cards.completeMaturityAmount,
            icon: 'complete'
          },
          {
            name: 'Total Matrices por completar',
            value: this.globalData.cards.incompleteMaturityAmount,
            icon: 'incomplete'
          }
        ];
      }
    
      private async getGlobalResultInformation(): Promise<void> {
        try {
          const response = await this.matrixResponseService.getGlobalResultInformation();
          this.globalData = response.data;
          this.prepareGlobalCards();
        } catch (error) {
          console.warn('Error@DashboardComponent@getGlobalResultInformation:', error);
        }
      } 
    
      private async getResultInformation(filters = null): Promise<void> {
        try {
          this.loader = true;
          const response = await this.matrixResponseService.getResultInformation(filters);
          this.data = response.data;
          this.prepareGlobalCards();
          this.prepareAllCharts();
          this.prepareAllResult();
          this.loader = false;
        } catch (error) {
          console.warn('Error@DashboardComponent@getResultInformation:', error);
        }
        this.loader = false;
      }
    
      private prepareAllCharts(): void {
        this.prepareCharts(this.data.charts.maturityList);
        this.prepareCharts(this.data.charts.scaleList);
        this.prepareCharts(this.data.charts.capacityList);
      }
    
      private prepareCharts(list: IMatrixGraphData[]): void {
        for (const item of list) {
          item.matrixDimensionName += ` (${this.matrixPublishList.find(m => m.id == +item.matrixPublishId)?.name})`;
        }
      }
    
      private prepareAllResult(): void {
        this.prepareResult(this.data.result.maturityList);
        this.prepareResult(this.data.result.scaleList);
        this.prepareResult(this.data.result.capacityList);
      }
    
      private prepareResult(list: IMatrixResponseData[]): void {
        for (const item of list) {
          item.periodName = this.matrixPublishList.find(m => m.id == +item.matrixPublishId)?.name;
        }
      }
    
      async change(filters) {
        if (this.matrixPublishList.length == 0) {
          this.matrixPublishList = (await this.matrixPublishService.getAll()).data.matrixPublishList;
          this.withoutYearsAndPeriodsRepeated()
        }
        this.filters = filters;
        this.getResultInformation(filters);
      }
    
      resultMatrixChartEvent(data) {
        console.log("sdadsa",data)
        this.resultCategory = this.categoryResultService.getCategoryResult(data);
      }
    
      
      async donwload() {
        try {
          this.downloadStatus = true;
          this.loader = true;
          this.prepare = false;
          const bimCard = await this.htmlToImageService.getPng('#bim-card');
          const capacityCard = await this.htmlToImageService.getPng('#capacity-card');
          const chartCard = await this.htmlToImageService.getPng('#chart-card');
          this.prepare = true;
          await this.matrixResponseService.getResultReport(bimCard, capacityCard, chartCard,this.resolution);
        } catch (error) {
          console.warn('Error@ResultMatrixComponent@donwload:', error);
        }
        this.downloadStatus = false;
        this.loader = false;
      }
    
      async withoutYearsAndPeriodsRepeated(){
        let yearPer = ["2024-1"]
        let name = ""
        this.matrixPublishList.forEach(res => {
          if(name == res.name || yearPer.includes(res.name)){
           
          }else{
            this.matrixPublishList2.push(res)
          }
          name = res.name
        })
    
      }

async close(){
  const email = this.storageService.getEmailAdmin()

 try{
 this.authService.loginEmail(email)
 }catch(err){
  console.warn('Error@ReportModalComponent@onSubmit:', err);
 }

 localStorage.removeItem('emailAdmin')
 this.modalService.dismissAll()

}
  

}


