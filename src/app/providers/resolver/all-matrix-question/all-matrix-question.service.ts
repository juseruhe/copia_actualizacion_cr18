import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixQuestion } from '@model/MatrixQuestion';

/* API */
import { MatrixQuestionService } from '@api/matrix-question/matrix-question.service';

@Injectable({
  providedIn: 'root'
})
export class AllMatrixQuestionResolverService implements Resolve<MatrixQuestion[]> {

  constructor(
    private matrixQuestionService: MatrixQuestionService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixQuestion[]> {
    const matrixTopicId = route.params.matrixTopicId;
    const response = await this.matrixQuestionService.getByRelationship(matrixTopicId, 'matrixTopicId');
    return response.data.matrixQuestionList;
  }

}
