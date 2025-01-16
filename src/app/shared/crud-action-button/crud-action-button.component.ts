import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CrudActionButtonService } from '@util/crud-action-button/crud-action-button.service';

@Component({
  selector: 'app-crud-action-button',
  templateUrl: './crud-action-button.component.html',
  styleUrls: ['./crud-action-button.component.scss']
})
export class CrudActionButtonComponent implements OnInit {

  @Input() value: string | number;
  @Input() rowData: any;

  constructor(
    private crudActionButtonService: CrudActionButtonService
  ) {}

  ngOnInit() {}

  actionEvent(mode: 'edit' | 'delete' | 'file') {
    this.crudActionButtonService.action.next({mode, row: this.rowData});
  }
}
