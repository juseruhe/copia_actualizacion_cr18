
/**
 * Models
 */
import { ERole } from '@enum/role.enum';
import { AdminProfile } from '@model/AdminProfile';

export const data: {
  adminProfileList: AdminProfile[]
} = {
  adminProfileList: [
    {
      completeName: 'xxxxxx',
      documentType: 'CC',
      document: 'xxxxxxxx',
      area: 'xxxxxxxx',
      cityId: 1,
      phone: 'xxxxxxxx',
      regionalId: 1,
      active: true,
      user: {
        email: '1xxxx@gmail.com',
        roleId: ERole.ADMIN,
      },
      created: new Date(),
      updated: new Date()
    },
    {
      completeName: 'xxxxxx',
      documentType: 'CC',
      document: 'xxxxxxxx',
      area: 'xxxxxxxx',
      cityId: 1,
      phone: 'xxxxxxxx',
      regionalId: 1,
      active: true,
      user: {
        email: '2xxxx@gmail.com',
        roleId: ERole.QUERY,
      },
      created: new Date(),
      updated: new Date()
    },
    {
      completeName: 'xxxxxx',
      documentType: 'CC',
      document: 'xxxxxxxx',
      area: 'xxxxxxxx',
      cityId: 1,
      phone: 'xxxxxxxx',
      regionalId: 1,
      active: true,
      user: {
        email: '3xxxx@gmail.com',
        roleId: ERole.ADMIN,
      },
      created: new Date(),
      updated: new Date()
    },
    {
      completeName: 'xxxxxx',
      documentType: 'CC',
      document: 'xxxxxxxx',
      area: 'xxxxxxxx',
      cityId: 1,
      phone: 'xxxxxxxx',
      regionalId: 1,
      active: true,
      user: {
        email: '4xxxx@gmail.com',
        roleId: ERole.QUERY,
      },
      created: new Date(),
      updated: new Date()
    },
  ]
};
