import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudActionButtonComponent } from './crud-action-button.component';

describe('CrudActionButtonComponent', () => {
  let component: CrudActionButtonComponent;
  let fixture: ComponentFixture<CrudActionButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudActionButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudActionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
