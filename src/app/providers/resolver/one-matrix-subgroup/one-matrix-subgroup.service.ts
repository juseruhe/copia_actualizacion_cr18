import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixSubgroup } from '@model/MatrixSubgroup';

/* API */
import { MatrixSubgroupService } from '@api/matrix-subgroup/matrix-subgroup.service';

@Injectable({
  providedIn: 'root'
})
export class OneMatrixSubgroupResolverService implements Resolve<MatrixSubgroup[]> {

  constructor(
    private matrixSubgroupService: MatrixSubgroupService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixSubgroup[]> {
    const matrixSubgroupId = route.params.matrixSubgroupId;
    const response = await this.matrixSubgroupService.getById(matrixSubgroupId);
    return response.data.matrixSubgroup;
  }

}
