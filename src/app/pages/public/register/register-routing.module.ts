import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginExistGuard } from '@guard/login-exist/login-exist.guard';

/* Components */
import { RegisterComponent } from './register.component';

/* Resolvers */
import { AllDocumentTypeResolverService } from '@resolver/all-document-type/all-document-type-resolver.service';
import { AllSizeCompanyResolverService } from '@resolver/all-size-company/all-size-company-resolver.service';
import { AllCategoryResolverService } from '@resolver/all-category/all-category-resolver.service';
import { AllCityResolverService } from '@resolver/all-city/all-city-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    data: {
      caseLoginExist: 2
    },
    canActivate: [
      LoginExistGuard
    ],
    resolve: {
      documentTypeList: AllDocumentTypeResolverService,
      sizeCompanyList: AllSizeCompanyResolverService,
      categoryList: AllCategoryResolverService,
      cityList: AllCityResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
