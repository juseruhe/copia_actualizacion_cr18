/**
* Interfaces
*/
import { ModelInterface } from '@interface/ModelInterface';

/* Models */
import { User } from './User';

export interface Company extends ModelInterface {
 id?: number;
 companyName?: string;
 nit?: string;
 inChargeName?: string;
 charge?: string;
 phone?: string;
  categoryId?: number;
 sizeCompany?: string;
 cityId?: number;
 stateId?: number;
 allyCamacol?: boolean;
 belongsBim?: boolean;
 terms?: boolean;
 knowledge?: number;
 knowledgeAt?: Date | string;
 user?: User;
}
