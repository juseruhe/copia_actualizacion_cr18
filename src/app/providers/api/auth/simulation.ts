import { Router } from '@angular/router';

/* Classes */
import { SimulationCore } from '@classes/SimulationCore';

/**
 * Models
 */
import { User } from '@model/User';
import { Company } from '@model/Company';
import { Person } from '@model/Person';
import { AdminProfile } from '@model/AdminProfile';

/**
 * Utils
 */
import { StorageService } from '@util/storage/storage.service';

/**
 * Interaces
 */
import { IResponse } from '@interface/IResponse';
import { IRegisterData } from '@interface/IRegisterData';

/* Jsons */
import { data } from '../user/data';

/* Enums */
import { ERole } from '@enum/role.enum';

export class Simulation extends SimulationCore {

  /* Temporal `User` records */
  protected override recordList: User[] = data.userList;

  /* Key module */
  protected override keyModule = 'user';

  constructor(
    protected storageService: StorageService,
    protected router: Router,
  ) {
    super();
  }

  /**
   * Save login session
   * @param token: Token session
   * @param user: `User` record
   */
  private saveLogin(token: string, user: User): void {
    this.storageService.setToken(token);
    const profile = user.company || user.person || user.adminProfile;
    const type = user.company || user.person;
    const name = (profile as Person)?.completeName ||
      (profile as Company)?.inChargeName || (profile as AdminProfile)?.completeName || 'NO DEFINIDO';
    this.storageService.setName(name);
    this.storageService.setEmail(user.email ?? '');
    this.storageService.setVerify(user.verify ?? 0);
    this.storageService.setRole(user.roleId ?? 0);
    if (type) {
      this.storageService.setType(user.companyId ? 1 : 2);
      this.storageService.setKnowledge(type.knowledge ?? 0);
      this.storageService.setKnowledgeAt(new Date(type.knowledgeAt || ''));
    }
    this.router.navigate(['/']);
  }

  /**
   * Login auth user
   * @param email: Email of `User` record
   */
  login(email: string): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const token = 'FSFS#"!$$%#SF';
        const user = this.recordList.find(target => target.email === email);
        if (!user) {
          return reject({error: { slug: 'user-not-found', msg: 'User not found' }});
        }
        this.saveLogin(token, user);
        return resolve({data: {user, token } });
      }, 500);
    });
  }

  /**
   * Regiter auth user
   * @param registerData: `IRegisterData` record
   */
  register(registerData: IRegisterData): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        const token = 'FSFS#"!$$%#SF';
        registerData.roleId = ERole.USER;
        this.saveLogin(token, registerData);
        return resolve({data: {user: registerData, token } });
      }, 500);
    });
  }

  /**
   * Recover password of `User` record
   */
  recoverPassword(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        return resolve({data: {response: true } });
      }, 500);
    });
  }

  /**
   * Restore password of `User` record
   * @param password: Password of `User` record
   * @param token: Recover password token
   */
  restorerPassword(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        return resolve({data: {user: Object.assign({}, this.recordList[0]) } });
      }, 500);
    });
  }

  requestNit(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        return resolve({data: {msg: 'ok'} });
      }, 500);
    });
  }

  verify(): Promise<IResponse> {
    return new Promise<IResponse>((resolve, reject) => {
      setTimeout(() => {
        return resolve({data: {msg: 'ok'} });
      }, 500);
    });
  }

}
