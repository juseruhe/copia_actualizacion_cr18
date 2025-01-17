/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { Regional } from '@model/Regional';

export class Simulation extends SimulationCore {

  /* Temporal `Regional` records */
  protected override recordList: Regional[] = data.regionalList;

  /* Key module */
  protected override keyModule = 'regional';

  constructor() {
    super();
  }
}
