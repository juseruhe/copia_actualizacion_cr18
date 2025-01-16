
/**
 * Models
 */
import { MatrixPublish } from '@model/MatrixPublish';

export const data: {
  matrixPublishList: MatrixPublish[]
} = {
  matrixPublishList: [{
    id: 1,
    year: 2020,
    period: 4,
    name: '2020 - 4',
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    year: 2021,
    period: 1,
    name: '2021 - 1',
    created: new Date(),
    updated: new Date()
  }]
};
