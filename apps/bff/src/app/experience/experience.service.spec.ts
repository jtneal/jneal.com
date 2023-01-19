import { Test } from '@nestjs/testing';

import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
  let service: ExperienceService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ExperienceService],
    }).compile();

    service = app.get<ExperienceService>(ExperienceService);
  });

  describe('get', () => {
    it('should return experience', () => {
      expect(service.get().length).toBeGreaterThanOrEqual(9);
    });
  });
});
