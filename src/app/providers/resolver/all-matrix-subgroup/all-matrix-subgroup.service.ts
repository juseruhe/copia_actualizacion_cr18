import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixSubgroup } from '@model/MatrixSubgroup';

/* API */
import { MatrixSubgroupService } from '@api/matrix-subgroup/matrix-subgroup.service';

@Injectable({
  providedIn: 'root'
})
export class AllMatrixSubgroupResolverService implements Resolve<MatrixSubgroup[]> {

  constructor(
    private matrixSubgroupService: MatrixSubgroupService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixSubgroup[]> {
    const matrixGroupId = route.params.matrixGroupId;
    const response = await this.matrixSubgroupService.getByRelationship(matrixGroupId, 'matrixGroupId');
    return response.data.matrixSubgroupList;
  }

}
