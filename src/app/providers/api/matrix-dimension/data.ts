
/**
 * Models
 */
import { MatrixDimension } from '@model/MatrixDimension';

export const data: {
  matrixDimensionList: MatrixDimension[]
} = {
  matrixDimensionList: [{
    id: 1,
    name: 'Software',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    matrixSubgroupId: 1,
    type: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    name: 'Hardware',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    matrixSubgroupId: 1,
    type: 2,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    name: 'Red',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    matrixSubgroupId: 1,
    type: 1,
    created: new Date(),
    updated: new Date()
  }]
};
