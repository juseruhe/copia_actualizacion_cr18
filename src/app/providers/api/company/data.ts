
/**
 * Models
 */
import { Company } from '@model/Company';

/* Enums */
import { ERole } from '@enum/role.enum';

export const data: {
  companyList: Company[]
} = {
  companyList: [{
    id: 1,
    companyName: 'xxxxxxxx',
    nit: 'xxxxxxxx',
    inChargeName: 'xxxxxxxx',
    charge: 'xxxxxxxx',
    phone: 'xxxxxxxx',
    categoryId: 1,
    sizeCompany: '20 – 40',
    cityId: 1,
    stateId: 1,
    allyCamacol: true,
    belongsBim: false,
    terms: true,
    knowledge: 1,
    knowledgeAt: new Date(),
    user: {
      id: 1,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      companyId: 1,
      roleId: ERole.USER
    },
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    companyName: 'xxxxxxxx',
    nit: 'xxxxxxxx',
    inChargeName: 'xxxxxxxx',
    charge: 'xxxxxxxx',
    phone: 'xxxxxxxx',
    categoryId: 1,
    sizeCompany: '20 – 40',
    cityId: 1,
    stateId: 1,
    allyCamacol: true,
    belongsBim: false,
    terms: true,
    knowledge: 1,
    knowledgeAt: new Date(),
    user: {
      id: 2,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      companyId: 2,
      roleId: ERole.USER
    },
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    companyName: 'xxxxxxxx',
    nit: 'xxxxxxxx',
    inChargeName: 'xxxxxxxx',
    charge: 'xxxxxxxx',
    phone: 'xxxxxxxx',
    categoryId: 1,
    sizeCompany: '20 – 40',
    cityId: 1,
    stateId: 1,
    allyCamacol: true,
    belongsBim: false,
    terms: true,
    knowledge: 1,
    knowledgeAt: new Date(),
    user: {
      id: 3,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      companyId: 3,
      roleId: ERole.USER
    },
    created: new Date(),
    updated: new Date()
  },
  {
    id: 4,
    companyName: 'xxxxxxxx',
    nit: 'xxxxxxxx',
    inChargeName: 'xxxxxxxx',
    charge: 'xxxxxxxx',
    phone: 'xxxxxxxx',
    categoryId: 1,
    sizeCompany: '20 – 40',
    cityId: 1,
    stateId: 1,
    allyCamacol: true,
    belongsBim: false,
    terms: true,
    knowledge: 1,
    knowledgeAt: new Date(),
    user: {
      id: 4,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      companyId: 4,
      roleId: ERole.USER
    },
    created: new Date(),
    updated: new Date()
  }]
};
