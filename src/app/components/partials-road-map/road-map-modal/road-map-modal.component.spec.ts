import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadMapModalComponent } from './road-map-modal.component';

describe('RoadMapModalComponent', () => {
  let component: RoadMapModalComponent;
  let fixture: ComponentFixture<RoadMapModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadMapModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadMapModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
