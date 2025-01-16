
/**
 * Models
 */
import { MatrixCategory } from '@model/MatrixCategory';

export const data: {
  matrixCategoryList: MatrixCategory[]
} = {
  matrixCategoryList: [{
    id: 1,
    name: 'Inicial',
    score: 0,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    name: 'Definido',
    score: 10,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    name: 'Gestionado',
    score: 20,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 4,
    name: 'Integrado',
    score: 30,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 5,
    name: 'Optimizado',
    score: 40,
    created: new Date(),
    updated: new Date()
  }]
};
