/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

export interface MatrixResponse extends ModelInterface {
  matrixTopicId?: number;
  matrixQuestionId?: number;
  matrixPublishId?: number;
  userId?: number;
}
