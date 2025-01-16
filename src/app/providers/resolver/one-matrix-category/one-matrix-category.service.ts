import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixCategory } from '@model/MatrixCategory';

/* API */
import { MatrixCategoryService } from '@api/matrix-category/matrix-category.service';

@Injectable({
  providedIn: 'root'
})
export class OneMatrixCategoryResolverService implements Resolve<MatrixCategory[]> {

  constructor(
    private matrixCategoryService: MatrixCategoryService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixCategory[]> {
    const matrixCategoryId = route.params.matrixCategoryId;
    const response = await this.matrixCategoryService.getById(matrixCategoryId);
    return response.data.matrixCategory;
  }

}
