import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudActionButtonService {

  action: Subject<{
    mode: 'edit' | 'delete' | 'file',
    row: any
  }> = new Subject();

  constructor() { }

}
