import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

/* Models */
import { MatrixTopic } from '@model/MatrixTopic';

/* API */
import { MatrixTopicService } from '@api/matrix-topic/matrix-topic.service';

@Injectable({
  providedIn: 'root'
})
export class AllMatrixTopicResolverService implements Resolve<MatrixTopic[]> {

  constructor(
    private matrixTopicService: MatrixTopicService
  ) { }

  async resolve(
    route: ActivatedRouteSnapshot, state: RouterStateSnapshot
  ): Promise<MatrixTopic[]> {
    const matrixDimensionId = route.params.matrixDimensionId;
    const response = await this.matrixTopicService.getByRelationship(matrixDimensionId, 'matrixDimensionId');
    return response.data.matrixTopicList;
  }

}
