/**
* Interfaces
*/
import { ModelInterface } from '@interface/ModelInterface';

/* Models */
import { User } from './User';

export interface Person extends ModelInterface {
 id?: number;
 completeName?: string;
 documentType?: string;
 document?: string;
 commercialName?: string;
 cityId?: number;
 stateId?: number;
 phone?: string;
 belongsBim?: boolean;
 terms?: boolean;
 knowledge?: number;
 knowledgeAt?: Date | string;
 user?: User;
}
