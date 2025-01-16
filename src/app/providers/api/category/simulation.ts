/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { Category } from '@model/Category';

export class Simulation extends SimulationCore {

  /* Temporal `Category` records */
  protected recordList: Category[] = data.categoryList;

  /* Key module */
  protected keyModule = 'category';

  constructor() {
    super();
  }
}
