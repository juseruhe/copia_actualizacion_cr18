/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixDimension } from '@model/MatrixDimension';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixDimension` records */
  protected recordList: MatrixDimension[] = data.matrixDimensionList;

  /* Key module */
  protected keyModule = 'matrixDimension';

  constructor() {
    super();
  }
}
