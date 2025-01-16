import { Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* Form control */
import { controlField } from './form';

@Component({
  selector: 'app-matrix-dimension-manage',
  templateUrl: './matrix-dimension-manage.component.html',
  styleUrls: ['./matrix-dimension-manage.component.scss']
})
export class MatrixDimensionManageComponent implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField = controlField;
  public name = 'Dimensión';

  typeList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.typeList = this.data?.otherData?.typeList || [];
  }

}
