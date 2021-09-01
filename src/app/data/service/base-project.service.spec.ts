import { TestBed } from '@angular/core/testing';

import { BaseProjectService } from './base-project.service';

describe('BaseProjectService', () => {
  let service: BaseProjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseProjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
