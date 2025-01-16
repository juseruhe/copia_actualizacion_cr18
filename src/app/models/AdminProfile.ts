/**
* Interfaces
*/
import { ModelInterface } from '@interface/ModelInterface';
import { User } from './User';

export interface AdminProfile extends ModelInterface {
 id?: number;
 completeName?: string;
 documentType?: string;
 document?: string;
 area?: string;
 phone?: string;
 cityId?: number;
 regionalId?: number;
 active?: boolean;

 user?: User;
}
