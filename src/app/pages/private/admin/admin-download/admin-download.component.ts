import { Component, OnInit } from '@angular/core';

/* API */
import { AdminProfileService } from '@api/admin-profile/admin-profile.service';
import { CompanyService } from '@api/company/company.service';
import { MatrixPublishService } from '@api/matrix-publish/matrix-publish.service';
import { MatrixResponseService } from '@api/matrix-response/matrix-response.service';
import { PersonService } from '@api/person/person.service';

/* Models */
import { MatrixPublish } from '@model/MatrixPublish';

@Component({
  selector: 'app-admin-download',
  templateUrl: './admin-download.component.html',
  styleUrls: ['./admin-download.component.scss']
})
export class AdminDownloadComponent implements OnInit {

  loader = false;
  matrixPublishList: MatrixPublish[] = [];
  matrixPublishList2: MatrixPublish[] = [];
  matrixPublishId: number;

  constructor(
    private adminProfileService: AdminProfileService,
    private companyService: CompanyService,
    private personService: PersonService,
    private matrixResponseService: MatrixResponseService,
    private matrixPublishService: MatrixPublishService
  ) { }

  async ngOnInit() {
    this.matrixPublishList = (await this.matrixPublishService.getAll()).data.matrixPublishList;
    this.matrixPublishId = this.matrixPublishList[0]?.id;
    this.withoutYearsAndPeriodsRepeated()
  }

  async dashboardDownload() {
    try {
      this.loader = true;
      await this.matrixResponseService.getResultInfoExcel({ matrixPublishId: this.matrixPublishId });
    } catch (error) {
      console.warn('Error@AdminDownloadComponent@dashboardDownload:', error);
    }
    this.loader = false;
  }

  async userDownload() {
    try {
      this.loader = true;
      await this.adminProfileService.getExcel();
    } catch (error) {
      console.warn('Error@AdminDownloadComponent@userDownload:', error);
    }
    this.loader = false;
  }

  async companyDownload() {
    try {
      this.loader = true;
      await this.companyService.getExcel({ matrixPublishId: this.matrixPublishId });
    } catch (error) {
      console.warn('Error@AdminDownloadComponent@companyDownload:', error);
    }
    this.loader = false;
  }

  async personDonwload() {
    try {
      this.loader = true;
      await this.personService.getExcel({ matrixPublishId: this.matrixPublishId });
    } catch (error) {
      console.warn('Error@AdminDownloadComponent@personDonwload:', error);
    }
    this.loader = false;
  }

  async resultByPeriodDonwload() {
    try {
      this.loader = true;
      await this.matrixResponseService.getResultByPeriodExcel();
    } catch (error) {
      console.warn('Error@AdminDownloadComponent@resultByPeriodDonwload:', error);
    }
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

}
