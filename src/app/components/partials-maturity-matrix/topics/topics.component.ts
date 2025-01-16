import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, FormArray, FormGroup } from '@angular/forms';

/* Models */
import { MatrixTopic } from '@model/MatrixTopic';
import { MatrixQuestion } from '@model/MatrixQuestion';
import { MatrixDimension } from '@model/MatrixDimension';

/* Services */
import { MaturityMatrix } from '@service/maturity-matrix/maturity-matrix';
import { MatrixResponseService } from '@api/matrix-response/matrix-response.service';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {

  @Input() index: number;
  @Input() length: number;
  @Input() first: boolean;
  @Input() last: boolean;
  @Input() matrixTopicList: MatrixTopic[] = [];

  @Output() nextEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output() backEvent: EventEmitter<number> = new EventEmitter<number>();

  opened: MatrixTopic = {};
  matrixTopicListForm: FormArray;

  constructor(
    public maturityMatrix: MaturityMatrix,
    public controlContainer: ControlContainer,
    private matrixResponseService: MatrixResponseService
  ) { }

  ngOnInit(): void {
    this.opened = this.matrixTopicList ? this.matrixTopicList[0] : {};
    this.matrixTopicListForm = (this.controlContainer.control as FormGroup).controls.matrixTopicList as FormArray;
  }

  show(element: MatrixTopic): void {
    this.opened.show = true;
    element.show = !element.show;
    this.opened = element;
  }

  select(question: MatrixQuestion, indexArr: number, 
    index: number,element: any[]) 
  {
    if (this.opened.selectedIndex === index || !this.maturityMatrix.canEdit) {
      return;
    }
    if (this.opened.selectedIndex !== undefined) {
      this.opened.matrixQuestionList[this.opened.selectedIndex].selected = false;
    }
    this.opened.selectedIndex = index;
    this.opened.matrixQuestionId = question.id;
    (this.matrixTopicListForm.controls[indexArr] as FormGroup).controls.question.patchValue(question.id);
    this.updateAnswer(this.opened.id, question.id);
    if(indexArr < element.length -1){
   this.show(element[indexArr+1])
    }

  }

  private async updateAnswer(matrixTopicId: number, matrixQuestionId: number): Promise<void> {
    if (this.maturityMatrix.simulation) {
      return;
    }
    try {
      this.maturityMatrix.saving = true;
      await this.matrixResponseService.create({ matrixTopicId, matrixQuestionId });
    } catch (error) {
      console.warn('Error@TopicsComponent@updateAnswer:', error);
    }
    this.maturityMatrix.saving = false;
  }

  next() {
    this.nextEvent.emit(this.index);
  }

  back() {
    this.backEvent.emit(this.index);
  }
}
