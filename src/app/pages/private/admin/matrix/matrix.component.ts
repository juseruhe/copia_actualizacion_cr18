import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {
  title = 'Grupos';
  description = 'En esta sección se pueden modificar los textos de los grupos y las preguntas asociadas a estos.';
  keyModule = 'matrixGroup';

  constructor() { }

  ngOnInit(): void {}

}
