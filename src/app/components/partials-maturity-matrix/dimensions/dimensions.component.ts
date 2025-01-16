import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormArray, FormGroup } from '@angular/forms';

/* API */
import { MatrixDimensionResponseService } from '@api/matrix-dimension-response/matrix-dimension-response.service';

/* Models */
import { MatrixDimension } from '@model/MatrixDimension';

/* Services */
import { MaturityMatrix } from '@service/maturity-matrix/maturity-matrix';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.scss']
})
export class DimensionsComponent implements OnInit {

  @Input() matrixDimensionList: MatrixDimension[] = [];
  @Input() index: number;
  @Input() first: boolean;
  @Input() last: boolean;

  @Output() nextEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() backEvent: EventEmitter<number> = new EventEmitter<number>();

  selected: MatrixDimension = {};

  constructor(
    public maturityMatrix: MaturityMatrix,
    public controlContainer: ControlContainer,
    private matrixResponseService: MatrixDimensionResponseService
  ) { }

  ngOnInit(): void {
    this.selected = this.matrixDimensionList ? this.matrixDimensionList[0] : {};
  }

  show(element: MatrixDimension) {
    this.selected.show = false;
    this.selected = {};
    element.show = !element.show;
    this.selected = element;
  }

  nextResponse(index: number) {
    if (index === this.matrixDimensionList.length - 1) {
      this.nextEvent.emit(this.index);
    } else {
      this.show(this.matrixDimensionList[index + 1]);
    }
  }

  backResponse(index: number) {
    if (index === 0) {
      this.backEvent.emit(this.index);
    } else {
      this.show(this.matrixDimensionList[index - 1]);
    }
  }

  async updateCountProject(dimension: MatrixDimension, index: number) {
    try {
      if (!this.maturityMatrix.canEdit || this.maturityMatrix.simulation) {
        return;
      }
      const dimensionControl = ((this.controlContainer.control as FormGroup).controls.matrixDimensionList as FormArray)
      .controls[index] as FormGroup;
      await this.matrixResponseService.create({
        matrixDimensionId: dimension.id,
        countProject: dimensionControl.controls.countProject.value
      });
    } catch (error) {
      console.warn('Error@DimensionsComponent@updateAnswer:', error);
    }
  }
}
