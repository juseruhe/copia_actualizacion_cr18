
/**
 * Models
 */
import { MatrixSubgroup } from '@model/MatrixSubgroup';

export const data: {
  matrixSubgroupList: MatrixSubgroup[]
} = {
  matrixSubgroupList: [{
    id: 1,
    name: 'Tecnología',
    matrixGroupId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    name: 'Procesos',
    matrixGroupId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    name: 'Políticas',
    matrixGroupId: 1,
    created: new Date(),
    updated: new Date()
  }]
};
