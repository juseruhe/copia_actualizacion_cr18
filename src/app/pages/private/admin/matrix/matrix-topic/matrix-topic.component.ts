import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix-topic',
  templateUrl: './matrix-topic.component.html',
  styleUrls: ['./matrix-topic.component.scss']
})
export class MatrixTopicComponent implements OnInit {

  keyModule = 'matrixTopic';
  grandfatherKey = 'matrixSubgroupId';

  constructor() { }

  ngOnInit(): void {}

}
