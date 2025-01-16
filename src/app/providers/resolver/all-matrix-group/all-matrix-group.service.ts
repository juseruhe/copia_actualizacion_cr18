import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixGroup } from '@model/MatrixGroup';

/* API */
import { MatrixGroupService } from '@api/matrix-group/matrix-group.service';

@Injectable({
  providedIn: 'root'
})
export class AllMatrixGroupResolverService implements Resolve<MatrixGroup[]> {

  constructor(
    private matrixGroupService: MatrixGroupService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixGroup[]> {
    const response = await this.matrixGroupService.getAll();
    return response.data.matrixGroupList;
  }

}
