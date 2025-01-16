/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';
import { MatrixPublish } from './MatrixPublish';

/* Models */
import { User } from './User';

export interface MatrixRecording extends ModelInterface {
  id?: number;
  userId?: number;
  matrixPublishId?: number;

  user?: User;
  matrixPublish?: MatrixPublish;
}
