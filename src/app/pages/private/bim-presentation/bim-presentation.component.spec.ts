import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BimPresentationComponent } from './bim-presentation.component';

describe('BimPresentationComponent', () => {
  let component: BimPresentationComponent;
  let fixture: ComponentFixture<BimPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BimPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BimPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
