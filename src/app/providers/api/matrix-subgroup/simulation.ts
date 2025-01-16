/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixSubgroup } from '@model/MatrixSubgroup';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixSubgroup` records */
  protected recordList: MatrixSubgroup[] = data.matrixSubgroupList;

  /* Key module */
  protected keyModule = 'matrixSubgroup';

  constructor() {
    super();
  }
}
