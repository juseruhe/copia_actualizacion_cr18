import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixGroup } from '@model/MatrixGroup';

/* API */
import { MatrixGroupService } from '@api/matrix-group/matrix-group.service';

@Injectable({
  providedIn: 'root'
})
export class OneMatrixGroupResolverService implements Resolve<MatrixGroup[]> {

  constructor(
    private matrixGroupService: MatrixGroupService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixGroup[]> {
    const matrixGroupId = route.params.matrixGroupId;
    const response = await this.matrixGroupService.getById(matrixGroupId);
    return response.data.matrixGroup;
  }

}
