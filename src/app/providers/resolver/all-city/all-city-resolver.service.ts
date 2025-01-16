import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { City } from '@model/City';

/* API */
import { CityService } from '@api/city/city.service';

@Injectable({
  providedIn: 'root'
})
export class AllCityResolverService implements Resolve<City[]> {

  constructor(
    private cityService: CityService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<City[]> {
    const response = await this.cityService.getAll();
    return response.data.cityList;
  }

}
