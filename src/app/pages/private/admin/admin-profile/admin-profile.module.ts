import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Modules */
import { AdminProfileRoutingModule } from './admin-profile-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

/* Components */
import { AdminProfileComponent } from './admin-profile.component';

@NgModule({
  declarations: [AdminProfileComponent],
  imports: [
    CommonModule,
    AdminProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ]
})
export class AdminProfileModule { }
