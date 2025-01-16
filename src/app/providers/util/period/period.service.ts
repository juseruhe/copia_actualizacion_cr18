import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  private startYear = 2020;
  private startPeriod = 4;

  constructor() { }

  async getAll(): Promise<string[]> {
    const amount = 4;
    const year = moment().year();
    const quarter = moment().quarter();
    const init = this.startYear + this.startPeriod;
    const limit = year + quarter;
    const periodList = [];
    for (let i = this.startYear; i < this.startYear + 1; i++) {
      for (let j = 1; j <= amount; j++) {
        const target = i + j;
        if (target >= init && target <= limit) {
          periodList.push({
            id: `${i}-${j}`,
            period: j,
            year: i
          });
        }
      }
    }
    return periodList;
  }
}
