import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix-question',
  templateUrl: './matrix-question.component.html',
  styleUrls: ['./matrix-question.component.scss']
})
export class MatrixQuestionComponent implements OnInit {

  keyModule = 'matrixQuestion';
  grandfatherKey = 'matrixDimensionId';

  constructor() { }

  ngOnInit(): void {}

}
