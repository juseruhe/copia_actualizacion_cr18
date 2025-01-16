/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { MatrixRecording } from '@model/MatrixRecording';

/* Interfaces */
import { IResponse } from '@interface/IResponse';

export class Simulation extends SimulationCore {

  /* Temporal `MatrixRecording` records */
  protected override recordList: MatrixRecording[] = data.matrixRecordingList;

  /* Key module */
  protected override keyModule = 'matrixRecording';

  constructor() {
    super();
  }

  getCurrentPeriod(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        return resolve({data: {matrixRecording: {
          id: 1,
          userId: 2,
          matrixPublishId: 2,
          created: new Date(),
          updated: new Date()
        } } });
      }, 500);
    });
  }

}
