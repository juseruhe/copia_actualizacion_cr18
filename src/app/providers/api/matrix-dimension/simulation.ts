/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixDimension } from '@model/MatrixDimension';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixDimension` records */
  protected override recordList: MatrixDimension[] = data.matrixDimensionList;

  /* Key module */
  protected override keyModule = 'matrixDimension';

  constructor() {
    super();
  }
}
