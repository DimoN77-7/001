import { TestBed } from '@angular/core/testing';

import { ExitAccService } from './exit-acc.service';

describe('ExitAccService', () => {
  let service: ExitAccService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExitAccService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
