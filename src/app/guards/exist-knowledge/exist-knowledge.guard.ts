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
export class ExistKnowledgeGuard implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const response = [ERole.SUPERADMIN, ERole.ADMIN, ERole.QUERY].includes(this.storageService.getRole()) ||
      this.storageService.getKnowledge() !== 0 || this.router.parseUrl('/outside-where-are-you');
    return response;
  }

}
