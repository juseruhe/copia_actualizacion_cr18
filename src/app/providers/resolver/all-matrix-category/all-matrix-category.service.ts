import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixCategory } from '@model/MatrixCategory';

/* API */
import { MatrixCategoryService } from '@api/matrix-category/matrix-category.service';

@Injectable({
  providedIn: 'root'
})
export class AllMatrixCategoryResolverService implements Resolve<MatrixCategory[]> {

  constructor(
    private matrixCategoryService: MatrixCategoryService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixCategory[]> {
    const response = await this.matrixCategoryService.getAll();
    return response.data.matrixCategoryList;
  }

}
