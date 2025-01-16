import { TestBed } from '@angular/core/testing';

import { CrudActionButtonService } from './crud-action-button.service';

describe('CrudActionButtonService', () => {
  let service: CrudActionButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudActionButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
