import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingVerifyComponent } from './pending-verify.component';

describe('PendingVerifyComponent', () => {
  let component: PendingVerifyComponent;
  let fixture: ComponentFixture<PendingVerifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingVerifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingVerifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
