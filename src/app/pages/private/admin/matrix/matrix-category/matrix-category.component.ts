import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix-category',
  templateUrl: './matrix-category.component.html',
  styleUrls: ['./matrix-category.component.scss']
})
export class MatrixCategoryComponent implements OnInit {

  keyModule = 'matrixCategory';
  title = 'Categorías';

  constructor() { }

  ngOnInit(): void {}

}
