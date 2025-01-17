/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { Person } from '@model/Person';

/* Interfaces */
import { IResponse } from '@interface/IResponse';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

export class Simulation extends SimulationCore {

  /* Temporal `Person` records */
  protected override recordList: Person[] = data.personList;

  /* Key module */
  protected override keyModule = 'person';

  constructor(
    protected storageService: StorageService
  ) {
    super();
  }

  patchKnowledge(knowledge: number): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data = {
          knowledge,
          knowledgeAt: new Date().toString()
        };
        this.storageService.setKnowledge(response.data.knowledge);
        this.storageService.setKnowledgeAt(response.data.knowledgeAt);
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
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

  getByFilter(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        return resolve({data: {personList: this.recordList } });
      }, 500);
    });
  }
}
