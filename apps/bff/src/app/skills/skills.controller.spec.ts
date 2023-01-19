import { Test } from '@nestjs/testing';

import { SkillsController } from './skills.controller';
import { SkillsService } from './skills.service';

describe('SkillsController', () => {
  let controller: SkillsController;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      controllers: [SkillsController],
      providers: [SkillsService],
    }).compile();

    controller = app.get<SkillsController>(SkillsController);
  });

  describe('get', () => {
    it('should return skills', () => {
      expect(controller.get().length).toBeGreaterThanOrEqual(12);
    });
  });
});
