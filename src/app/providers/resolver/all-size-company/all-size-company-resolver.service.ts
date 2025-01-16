import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllSizeCompanyResolverService implements Resolve<string[]> {

  private sizeCompanyList: string[] = [
    'Menos de 10',
    '10 – 20',
    '20 – 40',
    '40 – 60',
    'Mas de 60'
  ];

  constructor() { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<string[]> {
    return this.sizeCompanyList;
  }
}
