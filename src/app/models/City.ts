/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

export interface City extends ModelInterface {
  id?: number;
  name?: string;
  stateId?: number;
}
