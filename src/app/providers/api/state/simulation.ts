/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { Category } from '@model/Category';

export class Simulation extends SimulationCore {

  /* Temporal `Category` records */
  protected override recordList: Category[] = data.stateList;

  /* Key module */
  protected override keyModule = 'state';

  constructor() {
    super();
  }
}
