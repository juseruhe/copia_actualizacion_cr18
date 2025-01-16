import { Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* Form control */
import { controlField } from './form';

@Component({
  selector: 'app-admin-company-manage',
  templateUrl: './admin-company-manage.component.html',
  styleUrls: ['./admin-company-manage.component.scss']
})
export class AdminCompanyManageComponent implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField = controlField;
  public name = 'empresa';

  constructor() { }

  ngOnInit(): void {}

}
