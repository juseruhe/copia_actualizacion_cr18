import { Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* Form control */
import { controlField } from './form';

@Component({
  selector: 'app-matrix-group-manage',
  templateUrl: './matrix-group-manage.component.html',
  styleUrls: ['./matrix-group-manage.component.scss']
})
export class MatrixGroupManageComponent implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField = controlField;
  public name = 'Grupo';

  constructor() { }

  ngOnInit(): void {
  }

}
