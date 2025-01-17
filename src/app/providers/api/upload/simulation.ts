/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

export class Simulation extends SimulationCore {

  /* Key module */
  protected override keyModule = 'upload';

  constructor() {
    super();
  }

  staticFile(): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => {
        return resolve(true);
      }, this.SIMULATION_TIME);
    });
  }

}
