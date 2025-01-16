/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixResponse } from '@model/MatrixResponse';

/* Interfaces */
import { IResponse } from '@interface/IResponse';
import { IAdminMatrixInformation } from '@interface/IAdminMatrixInformation';
import { IGlobalMatrixInformation } from '@interface/IGlobalMatrixInformation';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixResponse` records */
  protected override recordList: MatrixResponse[] = data.matrixResponseList;

  protected resultInformation: IAdminMatrixInformation = data.resultInformation;

  protected globalResultInformation: IGlobalMatrixInformation = data.globalResultInformation;

  /* Key module */
  protected override keyModule = 'matrixResponse';

  constructor() {
    super();
  }

  getResult(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.matrixResponseList = [
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Elección de software',
            matrixQuestionName: 'No existen criterios funcionales para el uso y selección del software.',
            score: 20,
            total: 2.5
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Usos',
            matrixQuestionName: 'Los Modelos 3D se usan como base para generar principalmente representaciones 2D / entregables precisos.',
            score: 30,
            total: 3.5
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Almacenamiento e intercambio',
            matrixQuestionName: 'No existen criterios funcionales para el uso y selección del software.',
            score: 25,
            total: 3.0
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Flujos de información',
            matrixQuestionName: 'No existen criterios funcionales para el uso y selección del software.',
            score: 40,
            total: 4.5
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Elección de software',
            matrixQuestionName: 'No existen criterios funcionales para el uso y selección del software.',
            score: 20,
            total: 2.5
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Usos',
            matrixQuestionName: 'Los Modelos 3D se usan como base para generar principalmente representaciones 2D / entregables precisos.',
            score: 30,
            total: 3.5
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Almacenamiento e intercambio',
            matrixQuestionName: 'No existen criterios funcionales para el uso y selección del software.',
            score: 25,
            total: 3.0
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Flujos de información',
            matrixQuestionName: 'No existen criterios funcionales para el uso y selección del software.',
            score: 40,
            total: 4.5
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Elección de software',
            matrixQuestionName: 'No existen criterios funcionales para el uso y selección del software.',
            score: 20,
            total: 2.5
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Usos',
            matrixQuestionName: 'Los Modelos 3D se usan como base para generar principalmente representaciones 2D / entregables precisos.',
            score: 30,
            total: 3.5
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Almacenamiento e intercambio',
            matrixQuestionName: 'No existen criterios funcionales para el uso y selección del software.',
            score: 25,
            total: 3.0
          },
          {
            matrixDimensionName: 'Software: aplicaciones, entregables y datos',
            matrixTopicName: 'Flujos de información',
            matrixQuestionName: 'No existen criterios funcionales para el uso y selección del software.',
            score: 40,
            total: 4.5
          }
        ];
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getResultCategory() {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data = {
          category: 'A',
          categoryName: 'AD-HOC'
        };
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getGraphResult(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.matrixResponseList = [
          {
            matrixDimensionName: 'Dimensión 1',
            total: 35
          },
          {
            matrixDimensionName: 'Dimensión 2',
            total: 35
          },
          {
            matrixDimensionName: 'Dimensión 3',
            total: 30
          },
          {
            matrixDimensionName: 'Dimensión 4',
            total: 40
          },
          {
            matrixDimensionName: 'Dimensión 5',
            total: 40
          }
        ];
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getResultExcel() {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.msg = 'ok';
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getResultReport() {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.msg = 'ok';
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getResultInformation(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data = this.resultInformation;
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getGlobalResultInformation(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data = this.globalResultInformation;
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getResultInfoExcel() {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.msg = 'ok';
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getResultByPeriod(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.resultList = [
          {
            matrixSubgroupName: 'Subgrupo 1',
            matrixDimensionName: 'Dimension 1',
            matrixTopicName: 'Tema a tratar 1',
            matrixCategoryName: 'Categoria 1',
            matrixQuestionName: 'Pregunta 1.',
            score: 20,
            companyName: 'Empresa 1',
            completeName: '-',
            sizeCompany: '10-100',
            categoryName: 'Categoria 1',
            cityName: 'Ciudad 1',
            stateName: 'Departamento 1',
            allyCamacol: 'Si',
            belongsBim: 'No',
            year: 2020,
            period: 3,
            knowledgeName: 'Ya tengo procesos BIM'
          },
          {
            matrixSubgroupName: 'Subgrupo 1',
            matrixDimensionName: 'Dimension 1',
            matrixTopicName: 'Tema a tratar 1',
            matrixCategoryName: 'Categoria 1',
            matrixQuestionName: 'Pregunta 1.',
            score: 30,
            companyName: '-',
            completeName: 'Persona 1',
            sizeCompany: '-',
            categoryName: '-',
            cityName: 'Ciudad 1',
            stateName: 'Departamento 1',
            allyCamacol: '-',
            belongsBim: 'Si',
            year: 2020,
            period: 3,
            knowledgeName: 'Ya tengo procesos BIM'
          }
        ];
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getResultByPeriodExcel() {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.msg = 'ok';
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

}
