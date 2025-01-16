import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizedModalComponent } from './finalized-modal.component';

describe('FinalizedModalComponent', () => {
  let component: FinalizedModalComponent;
  let fixture: ComponentFixture<FinalizedModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizedModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
