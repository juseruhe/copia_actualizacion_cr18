import { Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* Form control */
import { controlField } from './form';

@Component({
  selector: 'app-matrix-category-manage',
  templateUrl: './matrix-category-manage.component.html',
  styleUrls: ['./matrix-category-manage.component.scss']
})
export class MatrixCategoryManageComponent implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField = controlField;
  public name = 'Categoría';

  constructor() { }

  ngOnInit(): void {
  }

}
