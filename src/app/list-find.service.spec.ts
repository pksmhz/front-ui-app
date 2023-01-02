import { TestBed } from '@angular/core/testing';

import { ListFindService } from './list-find.service';

describe('ListFindService', () => {
  let service: ListFindService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListFindService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
