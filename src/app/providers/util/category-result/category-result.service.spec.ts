import { TestBed } from '@angular/core/testing';

import { CategoryResultService } from './category-result.service';

describe('CategoryResultService', () => {
  let service: CategoryResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
