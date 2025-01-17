/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { Category } from '@model/Category';

/* Intefaces */
import { IResponse } from '@interface/IResponse';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

export class Simulation extends SimulationCore {

  /* Temporal `Category` records */
  protected override recordList: Category[] = data.roleList;

  /* Key module */
  protected override keyModule = 'role';

  constructor(
    protected storageService: StorageService
  ) {
    super();
  }

  checkRole(roleId: number[]): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data = {
          hasRole: roleId.includes(this.storageService.getRole())
        };
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }
}
