import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class VerifyGuard implements CanActivate {

  constructor (
    private storageService: StorageService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const response = this.storageService.getVerify() === 1 || this.router.parseUrl('/pending-verify');
    return response;
  }

}
