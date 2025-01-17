/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixTopic } from '@model/MatrixTopic';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixTopic` records */
  protected override recordList: MatrixTopic[] = data.matrixTopicList;

  /* Key module */
  protected override keyModule = 'matrixTopic';

  constructor() {
    super();
  }
}
