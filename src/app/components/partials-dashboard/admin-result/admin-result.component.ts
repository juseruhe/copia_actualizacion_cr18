import { Component, Input, OnInit } from '@angular/core';

/* API */
import { MatrixResponseService } from '@api/matrix-response/matrix-response.service';

/* Interfaces */
import { IMatrixResponseData } from '@interface/IMatrixResponseData';

/* Models */
import { MatrixPublish } from '@model/MatrixPublish';

@Component({
  selector: 'app-admin-result',
  templateUrl: './admin-result.component.html',
  styleUrls: ['./admin-result.component.css']
})
export class AdminResultComponent implements OnInit {

  @Input() data: {
    maturityList?: IMatrixResponseData[],
    capacityList?: IMatrixResponseData[],
    scaleList?: IMatrixResponseData[],
  } = {};

  @Input() filters: any = {};


  settings = {
    attr: {
      class: 'table table-striped table-bordered table-responsive-md'
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      periodName: {
        title: 'Período'
      },
      matrixDimensionName: {
        title: 'Categoría'
      },
      matrixTopicName: {
        title: 'Temas a tratar'
      },
      total: {
        title: 'Resultado',
        type: 'html',
        valuePrepareFunction: (cell, row) => {
          return `<strong>${cell}</strong>`;
        }
      }
    },
  };

  loader = false;

  constructor(
    private matrixResponseService: MatrixResponseService
  ) { }

  ngOnInit(): void {
  }

  async donwload() {
    try {
      this.loader = true;
      await this.matrixResponseService.getResultInfoExcel(this.filters);
    } catch (error) {
      console.warn('Error@AdminResultComponent@donwload:', error);
    }
    this.loader = false;
  }

}
