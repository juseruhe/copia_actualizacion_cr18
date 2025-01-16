
/**
 * Models
 */
import { ERole } from '@enum/role.enum';
import { Person } from '@model/Person';

export const data: {
  personList: Person[]
} = {
  personList: [{
    id: 1,
    completeName: 'XXXXX XXXXX',
    documentType: 'CC',
    document: 'xxxxxxxx',
    commercialName: 'xxxxxxxx',
    cityId: 1,
    stateId: 1,
    phone: 'xxxxxxxx',
    belongsBim: true,
    knowledge: 1,
    knowledgeAt: new Date(),
    user: {
      id: 1,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      personId: 1,
      roleId: ERole.USER,
    },
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    completeName: 'XXXXX XXXXX',
    documentType: 'CC',
    document: 'xxxxxxxx',
    commercialName: 'xxxxxxxx',
    cityId: 1,
    stateId: 1,
    phone: 'xxxxxxxx',
    belongsBim: true,
    knowledge: 1,
    knowledgeAt: new Date(),
    user: {
      id: 2,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      personId: 2,
      roleId: ERole.USER,
    },
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    completeName: 'XXXXX XXXXX',
    documentType: 'CC',
    document: 'xxxxxxxx',
    commercialName: 'xxxxxxxx',
    cityId: 1,
    stateId: 1,
    phone: 'xxxxxxxx',
    belongsBim: true,
    knowledge: 1,
    knowledgeAt: new Date(),
    user: {
      id: 3,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      personId: 3,
      roleId: ERole.USER,
    },
    created: new Date(),
    updated: new Date()
  },
  {
    id: 4,
    completeName: 'XXXXX XXXXX',
    documentType: 'CC',
    document: 'xxxxxxxx',
    commercialName: 'xxxxxxxx',
    cityId: 1,
    stateId: 1,
    phone: 'xxxxxxxx',
    belongsBim: true,
    knowledge: 1,
    knowledgeAt: new Date(),
    user: {
      id: 4,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      personId: 4,
      roleId: ERole.USER,
    },
    created: new Date(),
    updated: new Date()
  }]
};
