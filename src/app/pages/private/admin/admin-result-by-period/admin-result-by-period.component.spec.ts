import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminResultByPeriodComponent } from './admin-result-by-period.component';

describe('AdminResultByPeriodComponent', () => {
  let component: AdminResultByPeriodComponent;
  let fixture: ComponentFixture<AdminResultByPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminResultByPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminResultByPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
