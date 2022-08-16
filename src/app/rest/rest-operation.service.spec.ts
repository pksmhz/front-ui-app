import { TestBed } from '@angular/core/testing';

import { RestOperationService } from './rest-operation.service';

describe('RestOperationService', () => {
  let service: RestOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
