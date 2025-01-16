/**
 * Interfaces
 */
import { ModelInterface } from '@interface/ModelInterface';

export interface MatrixPublish extends ModelInterface {
  id?: number;
  year?: number;
  period?: number;

  name?: string;
}
