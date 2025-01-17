/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixSubgroup } from '@model/MatrixSubgroup';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixSubgroup` records */
  protected override recordList: MatrixSubgroup[] = data.matrixSubgroupList;

  /* Key module */
  protected override keyModule = 'matrixSubgroup';

  constructor() {
    super();
  }
}
