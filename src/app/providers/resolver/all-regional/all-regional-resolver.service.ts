import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { Regional } from '@model/Regional';

/* API */
import { RegionalService } from '@api/regional/regional.service';

@Injectable({
  providedIn: 'root'
})
export class AllRegionalResolverService implements Resolve<Regional[]> {

  constructor(
    private regionalService: RegionalService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<Regional[]> {
    const response = await this.regionalService.getAll();
    return response.data.regionalList;
  }

}
