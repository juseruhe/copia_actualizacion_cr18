import { Component, Input, OnInit } from '@angular/core';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* Form control */
import { controlField } from './form';

@Component({
  selector: 'app-matrix-topic-manage',
  templateUrl: './matrix-topic-manage.component.html',
  styleUrls: ['./matrix-topic-manage.component.scss']
})
export class MatrixTopicManageComponent implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField = controlField;
  public name = 'Tema a tratar';

  constructor() { }

  ngOnInit(): void {
  }

}
