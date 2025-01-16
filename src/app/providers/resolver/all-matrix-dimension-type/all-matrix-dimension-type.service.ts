import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AllMatrixDimensionTypeResolverService implements Resolve<any[]> {

  private typeList = [
    {
      id: 1,
      name: 'Normal'
    },
    {
      id: 2,
      name: 'Numero de proyectos'
    }
  ];

  constructor() { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<any[]> {
    return _.cloneDeep(this.typeList);
  }

}
