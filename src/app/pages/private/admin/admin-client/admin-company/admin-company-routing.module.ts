import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Resolvers */
import { AllCategoryResolverService } from '@resolver/all-category/all-category-resolver.service';
import { AllCityResolverService } from '@resolver/all-city/all-city-resolver.service';
import { AllSizeCompanyResolverService } from '@resolver/all-size-company/all-size-company-resolver.service';

/* Components */
import { AdminCompanyComponent } from './admin-company.component';

const routes: Routes = [
  {
    path: 'company',
    component: AdminCompanyComponent,
    resolve: {
      categoryList: AllCategoryResolverService,
      sizeCompanyList: AllSizeCompanyResolverService,
      cityList: AllCityResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminCompanyRoutingModule { }
