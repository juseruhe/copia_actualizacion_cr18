import { Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* Form control */
import { controlField } from './form';

@Component({
  selector: 'app-admin-user-manage',
  templateUrl: './admin-user-manage.component.html',
  styleUrls: ['./admin-user-manage.component.scss']
})
export class AdminUserManageComponent implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField = controlField;
  public name = 'usuario de administración';

  constructor() { }

  ngOnInit(): void {
  }

}
