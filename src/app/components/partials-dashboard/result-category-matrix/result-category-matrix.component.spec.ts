import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCategoryMatrixComponent } from './result-category-matrix.component';

describe('ResultCategoryMatrixComponent', () => {
  let component: ResultCategoryMatrixComponent;
  let fixture: ComponentFixture<ResultCategoryMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultCategoryMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultCategoryMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
