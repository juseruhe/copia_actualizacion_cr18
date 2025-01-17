/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixQuestion } from '@model/MatrixQuestion';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixQuestion` records */
  protected override recordList: MatrixQuestion[] = data.matrixQuestionList;

  /* Key module */
  protected override keyModule = 'matrixQuestion';

  constructor() {
    super();
  }
}
