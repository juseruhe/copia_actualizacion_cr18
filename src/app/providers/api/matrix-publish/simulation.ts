/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixPublish } from '@model/MatrixPublish';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixPublish` records */
  protected recordList: MatrixPublish[] = data.matrixPublishList;

  /* Key module */
  protected keyModule = 'matrixPublish';

  constructor() {
    super();
  }
}
