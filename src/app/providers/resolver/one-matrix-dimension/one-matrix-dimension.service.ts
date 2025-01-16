import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixDimension } from '@model/MatrixDimension';

/* API */
import { MatrixDimensionService } from '@api/matrix-dimension/matrix-dimension.service';

@Injectable({
  providedIn: 'root'
})
export class OneMatrixDimensionResolverService implements Resolve<MatrixDimension[]> {

  constructor(
    private matrixDimensionService: MatrixDimensionService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixDimension[]> {
    const matrixDimensionId = route.params.matrixDimensionId;
    const response = await this.matrixDimensionService.getById(matrixDimensionId);
    return response.data.matrixDimension;
  }

}
