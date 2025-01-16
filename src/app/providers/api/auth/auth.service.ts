import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@env/environment';

/* Classes */
import { ApiServiceCore } from '@classes/ApiServiceCore';

/**
 * Utils
 */
import { StorageService } from '@util/storage/storage.service';

/**
 * Services
 */
import { RestMiddlewareService } from '@service/rest-middleware/rest-middleware.service';

/**
 * Interfaces
 */
import { IResponse } from '@interface/IResponse';
import { IRegisterData } from '@interface/IRegisterData';

/**
 * Models
 */
import { User } from '@model/User';
import { Person } from '@model/Person';
import { Company } from '@model/Company';
import { AdminProfile } from '@model/AdminProfile';

/**
 * Simulation
 */
import { Simulation } from './simulation';
import { MatrixRecording } from '@model/MatrixRecording';
import { MatrixRecordingService } from '@api/matrix-recording/matrix-recording.service';
import { ERole } from '@enum/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends ApiServiceCore {

  /* API simulation */
  protected simulation: Simulation;

  /* Endpoint */
  protected endpoint = '/auth';

  /* Key module */
  protected keyModule = 'user';

  constructor(
    protected storageService: StorageService,
    protected router: Router,
    protected restMiddleware: RestMiddlewareService,
    private matrixRecordingService: MatrixRecordingService
  ) {
    super(restMiddleware);
    this.simulation = new Simulation(storageService, router);
  }


  /**
   * Log out of platform
   */
  logout(): void {
    this.storageService.cleanStorage();
    this.router.navigate(['/login']);
  }

  /**
   * Login auth user
   * @param email: Email of `User` record
   * @param password: Password of `User` record
   */
  async login(email: string, password: string): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.login(email);
      }
      const body = { email, password };
      const response = await this.restMiddleware.postRequest(`${this.endpoint}/login`, body);
      this.router.navigate(['/']);
      await this.saveLogin(response.data.token, response.data.user, response.data.hasMatrixRecording);
      return response;
    } catch (error) {
      throw error;
    }
  }

   /**
   * Login auth user
   * @param email: Email of `User` record
   */
   async loginEmail(email: string): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.login(email);
      }
      const body = { email};
      const response = await this.restMiddleware.postRequest(`${this.endpoint}/login/email`, body);
      await this.saveLoginEmail(response.data.token, response.data.user, response.data.hasMatrixRecording);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Register auth user
   * @param registerData: `IRegisterData` record
   */
  async register(registerData: IRegisterData): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.register(registerData);
      }
      const body = registerData;
      const path = body.nit ? 'company' : 'person';

     
      const response = await this.restMiddleware.postRequest(`${this.endpoint}/register/${path}`, body);
      this.router.navigate(['/']);
      await this.saveLogin(response.data.token, response.data.user);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Save login session
   * @param token: Token session
   * @param user: `User` record
   */
  private async saveLogin(token: string, user: User, hasMatrixRecording: MatrixRecording = null): Promise<void> {
    this.storageService.setToken(token);
    const profile = user.company || user.person || user.adminProfile;
    const type = user.company || user.person;
    const name = (profile as Person)?.completeName ||
      (profile as Company)?.inChargeName || (profile as AdminProfile)?.completeName || 'NO DEFINIDO';
    this.storageService.setName(name);
    this.storageService.setEmail(user.email);
    this.storageService.setVerify(user.verify);
    this.storageService.setRole(user.roleId);
    if (user.roleId !== ERole.SUPERADMIN) {
      const response = await this.matrixRecordingService.getCurrentPeriod();
      this.storageService.setHasMatrixRecording(!!response?.data?.matrixRecording?.id);
    }
    if (type) {
      this.storageService.setType(user.companyId ? 1 : 2);
      this.storageService.setKnowledge(type.knowledge);
      this.storageService.setKnowledgeAt(new Date(type.knowledgeAt));
    }
    this.router.navigate(['/']);
  }

   /**
   * Save login session
   * @param token: Token session
   * @param user: `User` record
   */
   private async saveLoginEmail(token: string, user: User, hasMatrixRecording: MatrixRecording = null): Promise<void> {
    this.storageService.setToken(token);
    const profile = user.company || user.person || user.adminProfile;
    const type = user.company || user.person;
    const name = (profile as Person)?.completeName ||
      (profile as Company)?.inChargeName || (profile as AdminProfile)?.completeName || 'NO DEFINIDO';
    this.storageService.setName(name);
    this.storageService.setEmail(user.email);
    this.storageService.setVerify(user.verify);
    this.storageService.setRole(user.roleId);
    if (user.roleId !== ERole.SUPERADMIN) {
      const response = await this.matrixRecordingService.getCurrentPeriod();
      this.storageService.setHasMatrixRecording(!!response?.data?.matrixRecording?.id);
    }
    if (type) {
      this.storageService.setType(user.companyId ? 1 : 2);
      this.storageService.setKnowledge(type.knowledge);
      this.storageService.setKnowledgeAt(new Date(type.knowledgeAt));
    }
  }

  /**
   * Recover password of `User` record
   * @param email: Email of `User` record
   */
  async recoverPassword(email: string): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.recoverPassword();
      }
      const response = await this.restMiddleware.getRequest(`${this.endpoint}/recoverPassword/${email}`);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /**
   * Restore password of `User` record
   * @param password: Password of `User` record
   * @param token: Recover password token
   */
  async restorerPassword(password: string, token: string): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.restorerPassword();
      }
      const body = { password, token };
      const response = await this.restMiddleware.putRequest(`${this.endpoint}/restorePassword`, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async requestNit(registerData: IRegisterData): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.requestNit();
      }
      const body = registerData;
      const response = await this.restMiddleware.postRequest(`${this.endpoint}/requestNit`, body);
      return response;
    } catch (error) {
      throw error;
    }
  }

  async verify(token: string): Promise<IResponse> {
    try {
      if (environment.simulation) {
        return this.simulation.verify();
      }
      const body = { token };
      const response = await this.restMiddleware.postRequest(`${this.endpoint}/verify`, body);
      this.storageService.setVerify(1);
      return response;
    } catch (error) {
      throw error;
    }
  }

}
