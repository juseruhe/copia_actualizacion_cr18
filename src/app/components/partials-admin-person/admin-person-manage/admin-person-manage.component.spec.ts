import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPersonManageComponent } from './admin-person-manage.component';

describe('AdminPersonManageComponent', () => {
  let component: AdminPersonManageComponent;
  let fixture: ComponentFixture<AdminPersonManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPersonManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPersonManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
