/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixPublish } from '@model/MatrixPublish';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixPublish` records */
  protected override recordList: MatrixPublish[] = data.matrixPublishList;

  /* Key module */
  protected override keyModule = 'matrixPublish';

  constructor() {
    super();
  }
}
