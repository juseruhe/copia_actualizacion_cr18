import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Interfaces
 */
import { IErrorResponse } from '@interface/IErrorResponse';

@Injectable({
  providedIn: 'root'
})
export class ManageApiErrorService {

  /* Error response channel */
  errorMessage: Subject<IErrorResponse> = new Subject<IErrorResponse>();

  constructor() { }

  /**
   * Emit incoming error response to subscriptors
   * @param errorResponse: Error response
   */
  emitIncomingErrorResponse(errorResponse: IErrorResponse): void {
    this.errorMessage.next(errorResponse);
  }
}
