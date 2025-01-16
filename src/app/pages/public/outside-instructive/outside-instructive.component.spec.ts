import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideInstructiveComponent } from './outside-instructive.component';

describe('OutsideInstructiveComponent', () => {
  let component: OutsideInstructiveComponent;
  let fixture: ComponentFixture<OutsideInstructiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideInstructiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideInstructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
