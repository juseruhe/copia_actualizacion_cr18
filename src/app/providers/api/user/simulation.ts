/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/* Jsons */
import { data } from './data';

/* Models */
import { User } from '@model/User';
import { Company } from '@model/Company';
import { Person } from '@model/Person';
import { AdminProfile } from '@model/AdminProfile';

/* Interfaces */
import { IResponse } from '@interface/IResponse';

export class Simulation extends SimulationCore {

  /* Temporal `User` records */
  protected recordList: User[] = data.userList;

  /* Temporal `User` records */
  protected adminUserList: User[] = data.adminUserList;

  protected companyList: User[] = data.companyList;

  protected personList: User[] = data.personList;

  /* Key module */
  protected keyModule = 'user';

  constructor() {
    super();
  }

  getProfile(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.user = {
          email: 'email@gmail.com',
          roleId: 1,
          person: {
            completeName: 'xxxxxxxx',
            documentType: 'CC',
            document: 'xxxxxxxx',
            commercialName: 'xxxxxxxx',
            cityId: 1,
            phone: 'xxxxxxxx',
            belongsBim: true,
            knowledge: 1,
            knowledgeAt: new Date(),
            hasMatrixRecording: true
          },
          company: {
            companyName: 'xxxxxxxx',
            nit: 'xxxxxxxx',
            inChargeName: 'xxxxxxxx',
            charge: 'xxxxxxxx',
            phone: 'xxxxxxxx',
            categoryId: 1,
            sizeCompany: '20 – 40',
            cityId: 1,
            allyCamacol: true,
            belongsBim: false,
            terms: true,
            knowledge: 1,
            knowledgeAt: new Date(),
          },
          adminProfile: {
            completeName: 'xxxxxxxx',
            documentType: 'CC',
            document: 'xxxxxxxx',
            area: 'xxxxxxxx',
            cityId: 1,
            phone: 'xxxxxxxx',
            regionalId: 1,
            active: true
          },
        };
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  updateProfile(profile: Company | Person | AdminProfile): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.profile = profile;
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  updatePassword(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.msg = 'ok';
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  getAdmin(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data.userList = this.adminUserList;
        response.data.count = 500;
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  adminCreate(record: any): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data[this.keyModule] = Object.assign({}, record);
        return resolve(response);
      }, this.SIMULATION_TIME);
    });
  }

  adminUpdate(record: any): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data[this.keyModule] = Object.assign({}, record);
        return resolve(response);
      }, 500);
    });
  }

  adminDelete(record: any): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const response = this.getResponse();
        response.data[this.keyModule] = Object.assign({}, record);
        return resolve(response);
      }, 500);
    });
  }

}
