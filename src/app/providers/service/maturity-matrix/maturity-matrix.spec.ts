import { TestBed } from '@angular/core/testing';

import { MaturityMatrix } from './maturity-matrix';

describe('MaturityMatrix', () => {
  let service: MaturityMatrix;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaturityMatrix);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
