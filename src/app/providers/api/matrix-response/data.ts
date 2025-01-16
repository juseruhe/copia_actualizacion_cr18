
/**
 * Models
 */
import { IAdminMatrixInformation } from '@interface/IAdminMatrixInformation';
import { IGlobalMatrixInformation } from '@interface/IGlobalMatrixInformation';
import { MatrixResponse } from '@model/MatrixResponse';

export const data: {
  matrixResponseList: MatrixResponse[],
  resultInformation: IAdminMatrixInformation,
  globalResultInformation: IGlobalMatrixInformation
} = {
  matrixResponseList: [{
    matrixTopicId: 1,
    matrixQuestionId: 1,
    userId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    matrixTopicId: 1,
    matrixQuestionId: 2,
    userId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    matrixTopicId: 1,
    matrixQuestionId: 3,
    userId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    matrixTopicId: 1,
    matrixQuestionId: 4,
    userId: 1,
    created: new Date(),
    updated: new Date()
  }],
  resultInformation: {
    charts: {
      maturityList: [
        {
          matrixDimensionName: 'Dimensión 1',
          total: 30
        },
        {
          matrixDimensionName: 'Dimensión 2',
          total: 35
        },
        {
          matrixDimensionName: 'Dimensión 3',
          total: 20
        },
        {
          matrixDimensionName: 'Dimensión 4',
          total: 20
        },
        {
          matrixDimensionName: 'Dimensión 5',
          total: 40
        }
      ],
      capacityList: [
        {
          matrixDimensionName: 'Dimensión 1',
          total: 30
        },
        {
          matrixDimensionName: 'Dimensión 2',
          total: 35
        },
        {
          matrixDimensionName: 'Dimensión 3',
          total: 20
        },
        {
          matrixDimensionName: 'Dimensión 4',
          total: 20
        },
        {
          matrixDimensionName: 'Dimensión 5',
          total: 25
        }
      ],
      scaleList: [
        {
          matrixDimensionName: 'Dimensión 1',
          total: 30
        },
        {
          matrixDimensionName: 'Dimensión 2',
          total: 35
        },
        {
          matrixDimensionName: 'Dimensión 3',
          total: 40
        },
        {
          matrixDimensionName: 'Dimensión 4',
          total: 21
        },
        {
          matrixDimensionName: 'Dimensión 5',
          total: 30
        }
      ],
    },
    cards: {
      companyAmount: 250,
      personAmount: 60
    },
    result: {
      maturityList: [
        {
          matrixTopicName: 'Elección de software',
          total: 20
        },
        {
          matrixTopicName: 'Usos',
          total: 30
        },
        {
          matrixTopicName: 'Almacenamiento e intercambio',
          total: 25
        },
        {
          matrixTopicName: 'Flujos de información',
          total: 40
        }
      ],
      capacityList: [
        {
          matrixTopicName: 'Elección de software',
          total: 20
        },
        {
          matrixTopicName: 'Usos',
          total: 30
        },
        {
          matrixTopicName: 'Almacenamiento e intercambio',
          total: 25
        },
        {
          matrixTopicName: 'Flujos de información',
          total: 40
        }
      ],
      scaleList: [
        {
          matrixTopicName: 'Elección de software',
          total: 20
        },
        {
          matrixTopicName: 'Usos',
          total: 30
        },
        {
          matrixTopicName: 'Almacenamiento e intercambio',
          total: 25
        },
        {
          matrixTopicName: 'Flujos de información',
          total: 40
        }
      ]
    }
  },
  globalResultInformation: {
    cards: {
      companyAmount: 250,
      personAmount: 60,
      completeMaturityAmount: 210,
      incompleteMaturityAmount: 100,
    }
  }
};
