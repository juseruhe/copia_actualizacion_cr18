import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

/* API */
import { RoleService } from '@api/role/role.service';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAccessGuard implements CanActivate, CanLoad {

  constructor(
    private storageService: StorageService,
    private roleService: RoleService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return !next.data.roleId ? true : this.haveLocalAccess(next);
  }

  async canLoad(
    route: Route,
    segments: UrlSegment[]): Promise<boolean> {
    let response = true;
    const access = !route.data.roleId ? null : (this.haveLocalAccess(route) || await this.haveRemoteAccess(route));
    if (access instanceof UrlTree) {
      response = false;
      this.router.navigateByUrl(access);
    }
    return response;
  }

  private haveLocalAccess(nextRoute: ActivatedRouteSnapshot | Route): boolean | UrlTree {
    return nextRoute.data.roleId.includes(this.storageService.getRole()) || this.router.parseUrl('/');
  }

  private async haveRemoteAccess(nextRoute: ActivatedRouteSnapshot | Route): Promise<boolean | UrlTree> {
    try {
      const response = await this.roleService.checkRole(nextRoute.data.roleId);
      return response.data.hasRole || this.router.parseUrl('/');
    } catch (error) {
      console.warn('Error@RoleAccessGuard@haveRemoteAccess:', error);
      return this.router.parseUrl('/');
    }
  }
}
