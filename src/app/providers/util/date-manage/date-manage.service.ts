import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateManageService {

  constructor() { }

  enableByMonth(date: Date, aum: number): boolean {
    const current = new Date();
    const limit = new Date(date);
    limit.setMonth(limit.getMonth() + aum);
    return current.getTime() > limit.getTime();
  }
}
