import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Pipes */
import { TransformHtmlPipe } from './transform-html/transform-html.pipe';
import { BackendHostPipe } from './backend-host/backend-host.pipe';
import { ShowAccessPipe } from './show-access/show-access.pipe';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    TransformHtmlPipe,
    BackendHostPipe,
    ShowAccessPipe
  ],
  declarations: [
    TransformHtmlPipe,
    BackendHostPipe,
    ShowAccessPipe
  ]
})
export class CustomPipesModule { }
