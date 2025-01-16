import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import * as _ from 'lodash';

/* Models */
import { Role } from '@model/Role';

/* Enums */
import { ERole } from '@enum/role.enum';

@Injectable({
  providedIn: 'root'
})
export class AllProfileResolverService implements Resolve<Role[]> {

  private roleList = [
    {
      id: ERole.SUPERADMIN,
      name: 'SÚPERADMINISTRACION'
    },
    {
      id: ERole.ADMIN,
      name: 'ADMINISTRACIÓN'
    },
    {
      id: ERole.QUERY,
      name: 'CONSULTA'
    }
  ];

  constructor() { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<Role[]> {
    return _.cloneDeep(this.roleList);
  }

}
