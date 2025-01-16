/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';
import { AdminProfile } from './AdminProfile';

/* Models */
import { Company } from './Company';
import { Person } from './Person';
import { Role } from './Role';

export interface User extends ModelInterface {
  id?: number;
  email?: string;
  password?: string;
  verify?: number;
  personId?: number;
  companyId?: number;
  adminProfileId?: number;
  person?: Person;
  company?: Company;
  adminProfile?: AdminProfile;
  roleId?: number;
  role?: Role;
}
