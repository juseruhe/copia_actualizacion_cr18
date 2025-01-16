import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

/* API */
import { AuthService } from '@api/auth/auth.service';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAccessInterceptor implements HttpInterceptor {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          /* client-side error */
        } else {
          /* server-side error */
          this.roleAccess(error);
        }
        return throwError(error);
      })
    );
  }

  roleAccess(error: HttpErrorResponse): void {
    const errorBody = error.error;
    const token = this.storageService.getToken();
    if (token && error.status === 401 && errorBody.slug === 'permission-denied') {
      this.storageService.setRole(errorBody.roleId);
      this.router.navigate(['/']);
    }
  }
}
