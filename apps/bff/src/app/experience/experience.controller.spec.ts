import { Test } from '@nestjs/testing';

import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';

describe('ExperienceController', () => {
  let controller: ExperienceController;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      controllers: [ExperienceController],
      providers: [ExperienceService],
    }).compile();

    controller = app.get<ExperienceController>(ExperienceController);
  });

  describe('get', () => {
    it('should return experience', () => {
      expect(controller.get().length).toBeGreaterThanOrEqual(9);
    });
  });
});
