import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructiveComponent } from './instructive.component';

describe('InstructiveComponent', () => {
  let component: InstructiveComponent;
  let fixture: ComponentFixture<InstructiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
