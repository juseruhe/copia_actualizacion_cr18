import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultMatrixComponent } from './result-matrix.component';

describe('ResultMatrixComponent', () => {
  let component: ResultMatrixComponent;
  let fixture: ComponentFixture<ResultMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
