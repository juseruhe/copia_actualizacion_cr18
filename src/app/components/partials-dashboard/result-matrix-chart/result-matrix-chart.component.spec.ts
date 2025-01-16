import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMatrixChartComponent } from './result-matrix-chart.component';

describe('ResultMatrixChartComponent', () => {
  let component: ResultMatrixChartComponent;
  let fixture: ComponentFixture<ResultMatrixChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultMatrixChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultMatrixChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
