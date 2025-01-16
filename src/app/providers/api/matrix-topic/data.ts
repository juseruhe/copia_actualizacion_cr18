
/**
 * Models
 */
import { MatrixTopic } from '@model/MatrixTopic';

export const data: {
  matrixTopicList: MatrixTopic[]
} = {
  matrixTopicList: [{
    id: 1,
    name: 'Especificación y gestión',
    matrixDimensionId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    name: 'Multidisciplinar',
    matrixDimensionId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    name: 'Tema a tratar 3',
    matrixDimensionId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 4,
    name: 'Tema a tratar 4',
    matrixDimensionId: 1,
    created: new Date(),
    updated: new Date()
  }]
};
