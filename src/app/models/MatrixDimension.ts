/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

/* Models */
import { MatrixSubgroup } from './MatrixSubgroup';
import { MatrixTopic } from './MatrixTopic';

export interface MatrixDimension extends ModelInterface {
  id?: number;
  name?: string;
  description?: string;
  matrixSubgroupId?: number;
  matrixSubgroup?: MatrixSubgroup;
  type?: number;

  matrixTopicList?: MatrixTopic[];
  show?: boolean;
}
