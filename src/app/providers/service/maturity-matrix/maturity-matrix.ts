import { Injectable } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

/* Interfaces */
import { IMaturityMatrix } from '@interface/IMaturityMatrix';
import { MatrixCategory } from '@model/MatrixCategory';

/* Models */
import { MatrixDimension } from '@model/MatrixDimension';
import { MatrixQuestion } from '@model/MatrixQuestion';
import { MatrixSubgroup } from '@model/MatrixSubgroup';
import { MatrixTopic } from '@model/MatrixTopic';

/* Utils */
import { StorageService } from '@util/storage/storage.service';

@Injectable()
export class MaturityMatrix {

  data: IMaturityMatrix = {
    matrixGroupList: [],
    matrixResponseList: [],
    matrixDimensionResponseList: []
  };

  form: FormGroup = new FormGroup({
    matrixGroupList: new FormArray([])
  });

  simulation: boolean;

  canEdit = true;

  saving = false;

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService
  ) { }

  init(simulation = false) {
    this.simulation = simulation;
    if (this.storageService.getHasMatrixRecording()) {
      this.canEdit = false;
    }
    this.prepareGroup();
  }

  prepareGroup() {
    for (const [i, record] of (this.data.matrixGroupList || []).entries()) {
      record.show = i > 0;
      const matrixSubgroupForm = this.fb.array([]);
      this.prepareSubgrup(record?.matrixSubgroupList, matrixSubgroupForm);
      (this.form.controls.matrixGroupList as FormArray).push(this.fb.group({
        matrixSubgroupList: matrixSubgroupForm
      }));
    }
  }

  prepareSubgrup(matrixSubgroupList: MatrixSubgroup[], formArray: FormArray) {
    for (const record of matrixSubgroupList || []) {
      const matrixDimensionForm = this.fb.array([]);
      this.prepareDimension(record?.matrixDimensionList, matrixDimensionForm);
      formArray.push(this.fb.group({
        matrixDimensionList: matrixDimensionForm
      }));
    }
  }

  prepareDimension(matrixDimensionList: MatrixDimension[], formArray: FormArray) {
    for (const [i, record] of (matrixDimensionList || []).entries()) {
      record.show = i <= 0;
      const matrixTopicForm = this.fb.array([]);
      this.prepareTopic(record?.matrixTopicList, matrixTopicForm);
      const dimensionResponse = this.data.matrixDimensionResponseList.find(r => r.matrixDimensionId === record.id);
      formArray.push(this.fb.group({
        matrixTopicList: matrixTopicForm,
        ...(record.type === 2) && {
          countProject: this.fb.control({
            disabled: !this.canEdit,
            value: dimensionResponse? dimensionResponse.countProject : null
          }, [Validators.required])
        }
      }));
    }
  }

  prepareTopic(matrixTopicList: MatrixTopic[], formArray: FormArray) {
    for (const [i, record] of (matrixTopicList || []).entries()) {
      const answer = this.data.matrixResponseList.find(r => r.matrixTopicId === record.id);
      let value = null;
      if (answer) {
        const index = record.matrixQuestionList.findIndex(r => r.id === answer.matrixQuestionId);
        record.selectedIndex = index !== -1 ? index : null;
        record.matrixQuestionId = answer.matrixQuestionId;
        value = answer.matrixQuestionId;
      }
      record.show = i > 0;
      formArray.push(this.fb.group({
        question: this.fb.control(value, [Validators.required])
      }));
    }
  }

}
