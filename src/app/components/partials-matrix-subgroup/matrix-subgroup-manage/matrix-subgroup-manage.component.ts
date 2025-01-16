import { Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* Form control */
import { controlField } from './form';

@Component({
  selector: 'app-matrix-subgroup-manage',
  templateUrl: './matrix-subgroup-manage.component.html',
  styleUrls: ['./matrix-subgroup-manage.component.scss']
})
export class MatrixSubgroupManageComponent implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField = controlField;
  public name = 'Subgrupo';

  constructor() { }

  ngOnInit(): void {
  }

}
