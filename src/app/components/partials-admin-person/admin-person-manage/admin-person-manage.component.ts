import { Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* Form control */
import { controlField } from './form';

@Component({
  selector: 'app-admin-person-manage',
  templateUrl: './admin-person-manage.component.html',
  styleUrls: ['./admin-person-manage.component.scss']
})
export class AdminPersonManageComponent implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField = controlField;
  public name = 'persona';

  constructor() { }

  ngOnInit(): void {
  }

}
