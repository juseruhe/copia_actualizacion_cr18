/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixResponse } from '@model/MatrixResponse';

/* Interfaces */
import { IResponse } from '@interface/IResponse';
import { IAdminMatrixInformation } from '@interface/IAdminMatrixInformation';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixResponse` records */
  protected override recordList: MatrixResponse[] = data.matrixDimensionResponseList;

  /* Key module */
  protected override keyModule = 'matrixDimensionResponse';

  constructor() {
    super();
  }

  getRelevance(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data = {
          relevance: 2,
        };
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

}
