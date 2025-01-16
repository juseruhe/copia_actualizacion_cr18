/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixCategory } from '@model/MatrixCategory';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixCategory` records */
  protected recordList: MatrixCategory[] = data.matrixCategoryList;

  /* Key module */
  protected keyModule = 'matrixCategory';

  constructor() {
    super();
  }
}
