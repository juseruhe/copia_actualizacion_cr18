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
export class HasRecordingInterceptor implements HttpInterceptor {

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
    const index = ['recording-not-found', 'recording-found'].findIndex(slug => slug === errorBody?.slug);
    if (token && error.status === 400 &&  index !== -1) {
      this.storageService.setHasMatrixRecording(index === 1);
      this.router.navigate(['/']);
    }
  }
}
