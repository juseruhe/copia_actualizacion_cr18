import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * Modules
 */
import { ToastrService } from 'ngx-toastr';

/**
 * Interfaces
 */
import { IErrorResponse } from '@interface/IErrorResponse';
import { IErrorMessage } from '@interface/IErrorMessage';

/**
 * Error message
 */
import { ERROR_MESSAGE } from './error-message';

/**
 * Services
 */
import { ManageApiErrorService } from '@service/manage-api-error/manage-api-error.service';


@Injectable({
  providedIn: 'root'
})
export class ApiErrorInterceptor implements HttpInterceptor {

  constructor(
    private toastrService: ToastrService,
    private manageApiErrorService: ManageApiErrorService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        // let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          /* client-side error */
        } else {
          /* server-side error */
          this.evaluateError(error);
        }
        return throwError(error);
      })
    );
  }

  /**
   * Check error response from server side
   * @param error: Http error response object
   */
  private async evaluateError(error: HttpErrorResponse) {
    if (!error) {
      return;
    }

    const errorBody: IErrorResponse = error.error instanceof Blob ? await this.getErrorFromBlob(error) : error.error;

    const errorMessage: IErrorMessage = ERROR_MESSAGE[errorBody.slug];
    if (errorMessage) {
      this.toastrService.warning(errorMessage.description, errorMessage.title || 'Atención');
    } else {
      this.toastrService.error('Ha ocurrido un error, intentalo de nuevo más tarde.', 'Lo sentimos');
    }

    this.manageApiErrorService.emitIncomingErrorResponse(errorBody);
  }

  private async getErrorFromBlob(error: HttpErrorResponse) {
    return new Promise<IErrorMessage | HttpErrorResponse>((resolve, reject) => {
      const reader = new FileReader();

      reader.addEventListener('loadend', (e) => {
        try {
          resolve(JSON.parse(e.target['result'] as string));
        } catch (error) {
          resolve(error);
        }
      });

      reader.readAsText(error.error);
    });
  }
}
