import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideWhereAreYourCompanyComponent } from './outside-where-are-your-company.component';

describe('OutsideWhereAreYourCompanyComponent', () => {
  let component: OutsideWhereAreYourCompanyComponent;
  let fixture: ComponentFixture<OutsideWhereAreYourCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideWhereAreYourCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideWhereAreYourCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
