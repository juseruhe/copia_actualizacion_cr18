/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

/* Models */
import { MatrixCategory } from './MatrixCategory';
import { MatrixTopic } from './MatrixTopic';

export interface MatrixQuestion extends ModelInterface {
  id?: number;
  name?: string;
  matrixTopicId?: number;
  matrixTopic?: MatrixTopic;
  matrixCategoryId?: number;
  matrixCategory?: MatrixCategory;
  selected?: boolean;
}
