/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixGroup } from '@model/MatrixGroup';

/* Interfaces */
import { IResponse } from '@interface/IResponse';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixGroup` records */
  protected override recordList: MatrixGroup[] = data.matrixGroupList;

  /* Key module */
  protected override keyModule = 'matrixGroup';

  constructor() {
    super();
  }

  getMaturityMatrix(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data = {
          matrixGroupList: data.maturityMatrix,
          matrixResponseList: data.matrixResponseList,
          matrixDimensionResponseList: data.matrixDimensionResponseList
        };
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getAdminMaturityMatrix(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data = {
          matrixGroupList: data.maturityMatrix,
        };
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }
}
