import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryResultService {

  private ranges: any[] = [
    {
      category: 'A',
      categoryName: 'INICIAL',
      maturityType: 'Madurez Baja',
      min: 0,
      max: 7.99,

    },
    {
      category: 'B',
      categoryName: 'DEFINIDO',
      maturityType: 'Madurez Media Baja',
      min: 8,
      max: 15.99
    },
    {
      category: 'C',
      categoryName: 'GESTIONADO',
      maturityType: 'Madurez Media',
      min: 16,
      max: 23.99
    },
    {
      category: 'D',
      categoryName: 'INTEGRADO',
      maturityType: 'Madurez Media Alta',
      min: 24,
      max: 31.99
    },
    {
      category: 'E',
      categoryName: 'OPTIMIZADO',
      maturityType: 'Madurez Alta',
      min: 32,
      max: 40.99
    }
  ];

 

  constructor() {}

  public getCategoryResult(
    matrixResponseList: any[]
  ): {
    category: string;
    categoryName: string;
  } {
    const max = 100;
    let total = 0;
    const limit = matrixResponseList.length;
    for (const item of matrixResponseList) {
      total += (+item.total);
    }
    const value = total/limit;
    const range = this.ranges.find(range => value >= range.min && value < range.max ) || {
      category: 'N',
      categoryName: 'No definido',
      max: 0, 
      min: 0
    };
    range.total = value;
    range.percentage = Math.floor((value/range.max)*max);
    range.percentageMaturity = Math.floor((value*max)/40)
    console.log(value)
    console.log(range.categoryName)
    console.log(range.percentageMaturity)
    return range;
  }


}
