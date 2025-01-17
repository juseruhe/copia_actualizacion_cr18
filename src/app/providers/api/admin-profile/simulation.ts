/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { AdminProfile } from '@model/AdminProfile';

/* Interfaces */
import { IResponse } from '@interface/IResponse';

export class Simulation extends SimulationCore {

  /* Temporal `User` records */
  protected override recordList: AdminProfile[] = data.adminProfileList;

  /* Key module */
  protected override keyModule = 'adminProfile';

  constructor() {
    super();
  }

  getExcel() {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.msg = 'ok';
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

}
