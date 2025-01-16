/* Models */
import { MatrixResponse } from '@model/MatrixResponse';
import { MatrixGroup } from '@model/MatrixGroup';
import { MatrixDimensionResponse } from '@model/MatrixDimensionResponse';

/**
 * Control field interface
 */
export interface IMaturityMatrix {
  matrixGroupList: MatrixGroup[];
  matrixResponseList: MatrixResponse[];
  matrixDimensionResponseList: MatrixDimensionResponse[];
}
