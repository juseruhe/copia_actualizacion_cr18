/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

/* Models */
import { MatrixCategory } from './MatrixCategory';
import { MatrixDimension } from './MatrixDimension';
import { MatrixQuestion } from './MatrixQuestion';

export interface MatrixTopic extends ModelInterface {
  id?: number;
  name?: string;
  matrixDimensionId?: number;
  MatrixDimension?: MatrixDimension;

  matrixCategoryList?: MatrixCategory[];
  matrixQuestionId?: number;
  matrixQuestionList?: MatrixQuestion[];
  show?: boolean;
  selectedIndex?: number;
}
