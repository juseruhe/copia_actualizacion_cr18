import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-matrix-dimension',
  templateUrl: './matrix-dimension.component.html',
  styleUrls: ['./matrix-dimension.component.scss']
})
export class MatrixDimensionComponent implements OnInit {

  keyModule = 'matrixDimension';
  grandfatherKey = 'matrixGroupId';

  typeList: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.typeList = this.activatedRoute.snapshot.data.typeList || [];
  }

  showType(type: number): string {
    return this.typeList.find(t => t.id === type)?.name || 'No definido';
  }

}
