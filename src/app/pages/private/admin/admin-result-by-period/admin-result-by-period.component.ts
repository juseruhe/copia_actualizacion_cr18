import { Component, OnInit } from '@angular/core';

/* API */
import { MatrixResponseService } from '@api/matrix-response/matrix-response.service';

/* Interfaces */
import { IMatrixResponseByPeriod } from '@interface/IMatrixResponseByPeriod';
import { ServerDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-admin-result-by-period',
  templateUrl: './admin-result-by-period.component.html',
  styleUrls: ['./admin-result-by-period.component.scss']
})
export class AdminResultByPeriodComponent implements OnInit {

  settings = {
    attr: {
      class: 'table table-striped table-bordered'
    },
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      matrixSubgroupName: {
        title: 'Grupo',
        class: 'sm'
      },
      matrixDimensionName: {
        title: 'Dimensión',
        class: 'sm'
      },
      matrixTopicName: {
        title: 'Tema',
        class: 'sm'
      },
      matrixCategoryName: {
        title: 'M. Categoría',
        class: 'sm'
      },
      matrixQuestionName: {
        title: 'Pregunta',
        class: 'lg'
      },
      score: {
        title: 'Resultado',
      },
      companyName: {
        title: 'Empresa',
        class: 'sm'
      },
      completeName: {
        title: 'Persona',
        class: 'sm'
      },
      sizeCompany: {
        title: 'Tamaño'
      },
      categoryName: {
        title: 'Categoria',
        class: 'sm'
      },
      stateName: {
        title: 'Departamento',
        class: 'sm'
      },
      cityName: {
        title: 'Ciudad',
        class: 'sm'
      },
      allyCamacol: {
        title: 'Aliado C.',
        class: 'sm',
        filter: {
          type: 'list',
          config: {
            selectText: 'Seleccione...',
            list: [
              { value: '1', title: 'Si' },
              { value: '0', title: 'No' }
            ],
          },
        },
      },
      belongsBim: {
        title: 'Pertenece BIM',
        class: 'sm',
        filter: {
          type: 'list',
          config: {
            selectText: 'Seleccione...',
            list: [
              { value: '1', title: 'Si' },
              { value: '0', title: 'No' }
            ],
          },
        },
      },
      year: {
        title: 'Año'
      },
      period: {
        title: 'Período'
      },
      knowledge: {
        title: 'Donde está',
        class: 'sm',
        filter: {
          type: 'list',
          config: {
            selectText: 'Seleccione...',
            list: [
              { value: '1', title: 'No sé qué es BIM' },
              { value: '2', title: 'Planeo implementar BIM' },
              { value: '3', title: 'Ya tengo procesos BIM' }
            ],
          },
        },
      },
    },
  };

  loader = false;

  source: ServerDataSource;
  recordList: IMatrixResponseByPeriod[] = [];

  constructor(
    private matrixResponseService: MatrixResponseService
  ) { }

  ngOnInit(): void {
    this.getResultByPeriod();
  }

  private async getResultByPeriod(): Promise<void> {
    try {
      if (this.loader) {
        return;
      }
      this.loader = true;
      this.source = await this.matrixResponseService.getResultByPeriod() as ServerDataSource;
    } catch (error) {
      console.warn('Error@AdminResultByPeriodComponent@getResultByPeriod:', error);
    }
    this.loader = false;
  }

  async donwload() {
    try {
      this.loader = true;
      await this.matrixResponseService.getResultByPeriodExcel();
    } catch (error) {
      console.warn('Error@AdminResultByPeriodComponent@donwload:', error);
    }
    this.loader = false;
  }

}
