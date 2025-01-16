/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

/* Models */
import { MatrixGroup } from './MatrixGroup';
import { MatrixDimension } from './MatrixDimension';

export interface MatrixSubgroup extends ModelInterface {
  id?: number;
  name?: string;
  matrixGroupId?: number;
  matrixGroup?: MatrixGroup;

  matrixDimensionList?: MatrixDimension[];
}
