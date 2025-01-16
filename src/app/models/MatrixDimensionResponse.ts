/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

export interface MatrixDimensionResponse extends ModelInterface {
  matrixDimensionId?: number;
  matrixPublishId?: number;
  userId?: number;
  countProject?: number;
}
