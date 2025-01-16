import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompanyManageComponent } from './admin-company-manage.component';

describe('AdminCompanyManageComponent', () => {
  let component: AdminCompanyManageComponent;
  let fixture: ComponentFixture<AdminCompanyManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompanyManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompanyManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
