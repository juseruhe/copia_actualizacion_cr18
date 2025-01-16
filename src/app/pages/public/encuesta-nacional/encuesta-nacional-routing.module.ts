import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {EncuestaNacionalComponent} from './encuesta-nacional.component'

const routes: Routes = [
  {
    path: '',
    component: EncuestaNacionalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EncuestaNacionalRoutingModule { }
