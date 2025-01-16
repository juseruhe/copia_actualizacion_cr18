import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDownloadComponent } from './admin-download.component';

describe('AdminDownloadComponent', () => {
  let component: AdminDownloadComponent;
  let fixture: ComponentFixture<AdminDownloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminDownloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
