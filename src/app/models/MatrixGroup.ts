/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

/* Models */
import { MatrixSubgroup } from './MatrixSubgroup';

export interface MatrixGroup extends ModelInterface {
  id?: number;
  name?: string;

  matrixSubgroupList?: MatrixSubgroup[];
  show?: boolean;
  selectedIndex?: number;
}
