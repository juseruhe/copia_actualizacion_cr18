import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixManageComponent } from './matrix-manage.component';

describe('MatrixManageComponent', () => {
  let component: MatrixManageComponent;
  let fixture: ComponentFixture<MatrixManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatrixManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatrixManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
