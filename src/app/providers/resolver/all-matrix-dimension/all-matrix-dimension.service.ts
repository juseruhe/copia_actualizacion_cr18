import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixDimension } from '@model/MatrixDimension';

/* API */
import { MatrixDimensionService } from '@api/matrix-dimension/matrix-dimension.service';

@Injectable({
  providedIn: 'root'
})
export class AllMatrixDimensionResolverService implements Resolve<MatrixDimension[]> {

  constructor(
    private matrixDimensionService: MatrixDimensionService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixDimension[]> {
    const matrixSubgroupId = route.params.matrixSubgroupId;
    const response = await this.matrixDimensionService.getByRelationship(matrixSubgroupId, 'matrixSubgroupId');
    return response.data.matrixDimensionList;
  }

}
