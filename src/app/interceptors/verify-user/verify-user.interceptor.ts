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
export class VerifyUserInterceptor implements HttpInterceptor {

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
          this.checkVerifyUser(error);
        }
        return throwError(error);
      })
    );
  }

  /**
   * Check invalid token from server side
   * @param error: Http error response object
   */
  checkVerifyUser(error: HttpErrorResponse): void {
    const errorBody = error.error;
    const token = this.storageService.getToken();
    if (token && error.status === 401 && errorBody.slug === 'user-not-verify') {
      this.storageService.setVerify(0);
      this.router.navigate(['/pending-verify']);
    }
  }
}
