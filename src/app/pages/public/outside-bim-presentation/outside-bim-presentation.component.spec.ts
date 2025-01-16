import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideBimPresentationComponent } from './outside-bim-presentation.component';

describe('OutsideBimPresentationComponent', () => {
  let component: OutsideBimPresentationComponent;
  let fixture: ComponentFixture<OutsideBimPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideBimPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideBimPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
