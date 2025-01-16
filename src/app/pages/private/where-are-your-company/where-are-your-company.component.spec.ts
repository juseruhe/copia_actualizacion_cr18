import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhereAreYourCompanyComponent } from './where-are-your-company.component';

describe('WhereAreYourCompanyComponent', () => {
  let component: WhereAreYourCompanyComponent;
  let fixture: ComponentFixture<WhereAreYourCompanyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhereAreYourCompanyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhereAreYourCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
