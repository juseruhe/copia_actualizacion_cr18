/* Interfaces */
import { IMatrixGraphData } from './IMatrixGraphData';
import { IMatrixResponseData } from './IMatrixResponseData';

export interface IAdminMatrixInformation {
  charts?: {
    maturityList?: IMatrixGraphData[],
    capacityList?: IMatrixGraphData[],
    scaleList?: IMatrixGraphData[],
  };
  cards?: {
    companyAmount?: number;
    personAmount?: number;
    completeMaturityAmount?: number;
    incompleteMaturityAmount?: number;
    companyRegisteredAmount?: number;
    personRegisteredAmount?: number;
  };
  result?: {
    maturityList?: IMatrixResponseData[],
    capacityList?: IMatrixResponseData[],
    scaleList?: IMatrixResponseData[],
  };
}
