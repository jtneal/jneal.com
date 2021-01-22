import { TestBed } from '@angular/core/testing';

import { Award } from './awards';
import { AwardsService } from './awards.service';

describe('AwardsService', () => {
  let service: AwardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(AwardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get awards', async () => {
    const awards = await service.get().toPromise();
    expect(awards.length).toBeGreaterThanOrEqual(12);
  });
});
