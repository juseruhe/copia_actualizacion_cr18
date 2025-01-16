import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '@env/environment';

@Pipe({
  name: 'backendHost'
})
export class BackendHostPipe implements PipeTransform {

  transform(value: string): any {
    return `${environment.backendHost}${value}`;
  }

}
