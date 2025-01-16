import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

/* Enums */
import { ERole } from '@enum/role.enum';

@Injectable({
  providedIn: 'root'
})
export class HasRecordingGuard implements CanActivate {

  constructor (
    private storageService: StorageService,
    private router: Router
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return [ERole.SUPERADMIN, ERole.ADMIN, ERole.QUERY].includes(this.storageService.getRole()) ||
      this.storageService.getHasMatrixRecording() || this.router.parseUrl('/outside-maturity-matrix');
  }

}
