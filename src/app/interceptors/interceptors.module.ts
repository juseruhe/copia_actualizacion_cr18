import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

/**
 * Interceptors
 */
import { HeadersInterceptor } from './headers/headers.interceptor';
import { AuthenticationInterceptor } from './authentication/authentication.interceptor';
import { ApiErrorInterceptor } from './api-error/api-error.interceptor';
import { VerifyUserInterceptor } from './verify-user/verify-user.interceptor';
import { RoleAccessInterceptor } from './role-access/role-access.interceptor';
import { HasRecordingInterceptor } from './has-recording/has-recording.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeadersInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthenticationInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: VerifyUserInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RoleAccessInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HasRecordingInterceptor,
      multi: true
    }
  ]
})
export class InterceptorsModule { }
