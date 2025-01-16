import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Components */
import { MatrixPreviewComponent } from './matrix-preview.component';

const routes: Routes = [
  {
    path: '',
    component: MatrixPreviewComponent,
    data: {
      title: 'Ruta BIM - Previsualización',
      urls: [
        { title: 'Ruta BIM', url: '/matrix' },
        { title: 'Previsualización' }
      ]
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatrixPreviewRoutingModule { }
