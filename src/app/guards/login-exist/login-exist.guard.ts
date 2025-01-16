import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree, CanLoad, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LoginExistGuard implements CanActivate, CanLoad {

  private type = 1;

  constructor(
    private storageService: StorageService,
    private router: Router
  ) {}

  /**
  * Trigger guard logic
  */
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.type = 1;
    return this.evaluateLogInExist(next);
  }

  canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    this.type = 0;
    const response = this.evaluateLogInExist(route) as Promise<boolean>;
    response.then(v => {
      if (!v) {
        this.router.navigateByUrl(this.goToLanding());
      }
    });
    return response;
  }

  /**
  * Evaluate if exist session
  */
  private async evaluateLogInExist(route: ActivatedRouteSnapshot | Route) {
    const caseLoginExist = route.data.caseLoginExist || 1;
    const token = this.storageService.getToken();
    const loginExist = token != null;
    let response: boolean | UrlTree = true;

    switch (caseLoginExist) {
      case 1:
        if (!loginExist) {
          response = this.type ? this.goToLanding() : false;
        }
        break;
      case 2:
        if (loginExist) {
          response = this.type ? this.goToHome() : false;
        }
        break;
    }
    return response;
  }

  /**
  * Prepare redirect to landing section
  */
  private goToLanding() {
    return this.router.parseUrl('/landing');
  }

  /**
  * Prepare redirect to home section
  */
  private goToHome() {
    return this.router.parseUrl('/');
  }

}
