import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideRoadMapComponent } from './outside-road-map.component';

describe('OutsideRoadMapComponent', () => {
  let component: OutsideRoadMapComponent;
  let fixture: ComponentFixture<OutsideRoadMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideRoadMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideRoadMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
