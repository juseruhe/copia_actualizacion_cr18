
/**
 * Models
 */
import { City } from '@model/City';

export const data: {
  cityList: City[]
} = {
  cityList: [{
    id: 1,
    name: 'Ciudad 1',
    stateId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    name: 'Ciudad 2',
    stateId: 1,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    name: 'Ciudad 3',
    stateId: 2,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 4,
    name: 'Ciudad 4',
    stateId: 3,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 5,
    name: 'Ciudad 5',
    stateId: 4,
    created: new Date(),
    updated: new Date()
  }]
};
