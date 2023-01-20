import { Test } from '@nestjs/testing';

import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  let service: SkillsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [SkillsService],
    }).compile();

    service = app.get<SkillsService>(SkillsService);
  });

  describe('get', () => {
    it('should return skills', () => {
      expect(service.get().length).toBeGreaterThanOrEqual(12);
    });
  });
});
