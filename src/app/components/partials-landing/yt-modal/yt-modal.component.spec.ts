import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YtModalComponent } from './yt-modal.component';

describe('YtModalComponent', () => {
  let component: YtModalComponent;
  let fixture: ComponentFixture<YtModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YtModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YtModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
