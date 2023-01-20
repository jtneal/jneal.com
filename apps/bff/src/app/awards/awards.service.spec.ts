import { Test } from '@nestjs/testing';

import { AwardsService } from './awards.service';

describe('AwardsService', () => {
  let service: AwardsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AwardsService],
    }).compile();

    service = app.get<AwardsService>(AwardsService);
  });

  describe('getData', () => {
    it('should return awards', () => {
      expect(service.get().length).toBeGreaterThanOrEqual(12);
    });
  });
});
