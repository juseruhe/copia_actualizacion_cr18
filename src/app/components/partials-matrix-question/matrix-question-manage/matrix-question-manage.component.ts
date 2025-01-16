import { Component, Input, OnInit } from '@angular/core';
import { MatrixCategoryService } from '@api/matrix-category/matrix-category.service';

/* Interfaces */
import { IControlField } from '@interface/IControlField';

/* Models */
import { MatrixCategory } from '@model/MatrixCategory';

/* Form control */
import { controlField } from './form';

@Component({
  selector: 'app-matrix-question-manage',
  templateUrl: './matrix-question-manage.component.html',
  styleUrls: ['./matrix-question-manage.component.scss']
})
export class MatrixQuestionManageComponent implements OnInit {

  @Input() public data: any = {};
  @Input() public controlField: IControlField = controlField;
  public name = 'Pregunta';

  matrixCategoryList: MatrixCategory[] = [];

  constructor(
    private matrixCategoryService: MatrixCategoryService
  ) { }

  ngOnInit(): void {
    this.getMatrixCategoryList();
  }

  private async getMatrixCategoryList(): Promise<void> {
    try {
      const response = await this.matrixCategoryService.getAll();
      this.matrixCategoryList = response.data.matrixCategoryList;
    } catch (error) {
      console.warn('Error@MatrixCategoryManageComponent@getCategoryList:', error);
    }
   }
}
