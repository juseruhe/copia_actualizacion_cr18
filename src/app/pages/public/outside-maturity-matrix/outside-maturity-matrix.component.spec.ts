import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideMaturityMatrixComponent } from './outside-maturity-matrix.component';

describe('OutsideMaturityMatrixComponent', () => {
  let component: OutsideMaturityMatrixComponent;
  let fixture: ComponentFixture<OutsideMaturityMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideMaturityMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideMaturityMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
