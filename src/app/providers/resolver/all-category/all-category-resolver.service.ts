import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { Category } from '@model/Category';

/* API */
import { CategoryService } from '@api/category/category.service';

@Injectable({
  providedIn: 'root'
})
export class AllCategoryResolverService implements Resolve<Category[]> {

  constructor(
    private categoryService: CategoryService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<Category[]> {
    const response = await this.categoryService.getAll();
    return response.data.categoryList;
  }

}
