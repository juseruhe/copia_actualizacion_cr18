
/**
 * Models
 */
import { ERole } from '@enum/role.enum';
import { User } from '@model/User';

export const data: {
  userList: User[],
  adminUserList: User[],
  companyList: User[],
  personList: User[]
} = {
  userList: [{
    id: 1,
    email: 'sebas71037@gmail.com',
    adminProfileId: 1,
    adminProfile: {
      completeName: 'Sebastian Vargas Arenas'
    },
    verify: 1,
    roleId: ERole.SUPERADMIN,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 2,
    email: 'andres@gmail.com',
    verify: 1,
    companyId: 1,
    company: {
      inChargeName: 'Codink',
      knowledge: 0,
      knowledgeAt: null
    },
    roleId: ERole.USER,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 3,
    email: 'daniel@gmail.com',
    verify: 1,
    personId: 1,
    person: {
      completeName: 'Daniel Martinez',
      documentType: 'CC',
      document: 'xxxxxxxx',
      commercialName: 'xxxxxxxx',
      cityId: 1,
      phone: 'xxxxxxxx',
      belongsBim: true,
      knowledge: 1,
      knowledgeAt: new Date(),
    },
    roleId: ERole.USER,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 4,
    email: 'cata@gmail.com',
    verify: 1,
    companyId: 1,
    company: {
      companyName: 'xxxxxxxx',
      nit: 'xxxxxxxx',
      inChargeName: 'xxxxxxxx',
      charge: 'xxxxxxxx',
      phone: 'xxxxxxxx',
      categoryId: 1,
      sizeCompany: '20 – 40',
      cityId: 1,
      allyCamacol: true,
      belongsBim: false,
      terms: true,
      knowledge: 1,
      knowledgeAt: new Date(),
    },
    roleId: ERole.USER,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 5,
    email: 'creonisis@gmail.com',
    adminProfileId: 2,
    adminProfile: {
      completeName: 'Dr. Creonisis'
    },
    verify: 1,
    roleId: ERole.ADMIN,
    created: new Date(),
    updated: new Date()
  },
  {
    id: 6,
    email: 'penny@gmail.com',
    adminProfileId: 3,
    adminProfile: {
      completeName: 'Dr. Pennywise'
    },
    verify: 1,
    roleId: ERole.QUERY,
    created: new Date(),
    updated: new Date()
  }],
  adminUserList: [
    {
      id: 1,
      email: '1xxxx@gmail.com',
      adminProfileId: 1,
      adminProfile: {
        completeName: 'xxxxxx',
        documentType: 'CC',
        document: 'xxxxxxxx',
        area: 'xxxxxxxx',
        cityId: 1,
        phone: 'xxxxxxxx',
        regionalId: 1,
        active: true
      },
      verify: 1,
      roleId: ERole.ADMIN,
      created: new Date(),
      updated: new Date()
    },
    {
      id: 2,
      email: '2xxxx@gmail.com',
      adminProfileId: 2,
      adminProfile: {
        completeName: 'xxxxxx',
        documentType: 'CC',
        document: 'xxxxxxxx',
        area: 'xxxxxxxx',
        cityId: 1,
        phone: 'xxxxxxxx',
        regionalId: 1,
        active: true
      },
      verify: 1,
      roleId: ERole.QUERY,
      created: new Date(),
      updated: new Date()
    },
    {
      id: 3,
      email: '3xxxx@gmail.com',
      adminProfileId: 3,
      adminProfile: {
        completeName: 'xxxxxx',
        documentType: 'CC',
        document: 'xxxxxxxx',
        area: 'xxxxxxxx',
        cityId: 1,
        phone: 'xxxxxxxx',
        regionalId: 1,
        active: true
      },
      verify: 1,
      roleId: ERole.ADMIN,
      created: new Date(),
      updated: new Date()
    },
    {
      id: 4,
      email: '4xxxx@gmail.com',
      adminProfileId: 4,
      adminProfile: {
        completeName: 'xxxxxx',
        documentType: 'CC',
        document: 'xxxxxxxx',
        area: 'xxxxxxxx',
        cityId: 1,
        phone: 'xxxxxxxx',
        regionalId: 1,
        active: true
      },
      verify: 1,
      roleId: ERole.QUERY,
      created: new Date(),
      updated: new Date()
    },
  ],
  companyList: [
    {
      id: 1,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      companyId: 1,
      company: {
        companyName: 'xxxxxxxx',
        nit: 'xxxxxxxx',
        inChargeName: 'xxxxxxxx',
        charge: 'xxxxxxxx',
        phone: 'xxxxxxxx',
        categoryId: 1,
        sizeCompany: '20 – 40',
        cityId: 1,
        allyCamacol: true,
        belongsBim: false,
        terms: true,
        knowledge: 1,
        knowledgeAt: new Date(),
      },
      roleId: ERole.USER,
      created: new Date(),
      updated: new Date()
    },
    {
      id: 2,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      companyId: 1,
      company: {
        companyName: 'xxxxxxxx',
        nit: 'xxxxxxxx',
        inChargeName: 'xxxxxxxx',
        charge: 'xxxxxxxx',
        phone: 'xxxxxxxx',
        categoryId: 1,
        sizeCompany: '20 – 40',
        cityId: 1,
        allyCamacol: true,
        belongsBim: false,
        terms: true,
        knowledge: 1,
        knowledgeAt: new Date(),
      },
      roleId: ERole.USER,
      created: new Date(),
      updated: new Date()
    },
    {
      id: 3,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      companyId: 1,
      company: {
        companyName: 'xxxxxxxx',
        nit: 'xxxxxxxx',
        inChargeName: 'xxxxxxxx',
        charge: 'xxxxxxxx',
        phone: 'xxxxxxxx',
        categoryId: 1,
        sizeCompany: '20 – 40',
        cityId: 1,
        allyCamacol: true,
        belongsBim: false,
        terms: true,
        knowledge: 1,
        knowledgeAt: new Date(),
      },
      roleId: ERole.USER,
      created: new Date(),
      updated: new Date()
    },
    {
      id: 4,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      companyId: 1,
      company: {
        companyName: 'xxxxxxxx',
        nit: 'xxxxxxxx',
        inChargeName: 'xxxxxxxx',
        charge: 'xxxxxxxx',
        phone: 'xxxxxxxx',
        categoryId: 1,
        sizeCompany: '20 – 40',
        cityId: 1,
        allyCamacol: true,
        belongsBim: false,
        terms: true,
        knowledge: 1,
        knowledgeAt: new Date(),
      },
      roleId: ERole.USER,
      created: new Date(),
      updated: new Date()
    }
  ],
  personList: [
    {
      id: 1,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      personId: 1,
      person: {
        completeName: 'XXXXX XXXXX',
        documentType: 'CC',
        document: 'xxxxxxxx',
        commercialName: 'xxxxxxxx',
        cityId: 1,
        phone: 'xxxxxxxx',
        belongsBim: true,
        knowledge: 1,
        knowledgeAt: new Date(),
      },
      roleId: ERole.USER,
      created: new Date(),
      updated: new Date()
    },
    {
      id: 2,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      personId: 1,
      person: {
        completeName: 'XXXXX XXXXX',
        documentType: 'CC',
        document: 'xxxxxxxx',
        commercialName: 'xxxxxxxx',
        cityId: 1,
        phone: 'xxxxxxxx',
        belongsBim: true,
        knowledge: 1,
        knowledgeAt: new Date(),
      },
      roleId: ERole.USER,
      created: new Date(),
      updated: new Date()
    },
    {
      id: 3,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      personId: 1,
      person: {
        completeName: 'XXXXX XXXXX',
        documentType: 'CC',
        document: 'xxxxxxxx',
        commercialName: 'xxxxxxxx',
        cityId: 1,
        phone: 'xxxxxxxx',
        belongsBim: true,
        knowledge: 1,
        knowledgeAt: new Date(),
      },
      roleId: ERole.USER,
      created: new Date(),
      updated: new Date()
    },
    {
      id: 4,
      email: 'xxxxxx@gmail.com',
      verify: 1,
      personId: 1,
      person: {
        completeName: 'XXXXX XXXXX',
        documentType: 'CC',
        document: 'xxxxxxxx',
        commercialName: 'xxxxxxxx',
        cityId: 1,
        phone: 'xxxxxxxx',
        belongsBim: true,
        knowledge: 1,
        knowledgeAt: new Date(),
      },
      roleId: ERole.USER,
      created: new Date(),
      updated: new Date()
    }
  ],
};
