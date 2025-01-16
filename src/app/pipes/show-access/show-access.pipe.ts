import { Pipe, PipeTransform } from '@angular/core';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

@Pipe({
  name: 'showAccess'
})
export class ShowAccessPipe implements PipeTransform {

  constructor(
    private storageService: StorageService
  ) {}

  transform(roleId: number[]): boolean {
    return !roleId ? true : roleId.includes(this.storageService.getRole());
  }

}
