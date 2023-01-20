import { Test } from '@nestjs/testing';

import { AwardsController } from './awards.controller';
import { AwardsService } from './awards.service';

describe('AwardsController', () => {
  let controller: AwardsController;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      controllers: [AwardsController],
      providers: [AwardsService],
    }).compile();

    controller = app.get<AwardsController>(AwardsController);
  });

  describe('get', () => {
    it('should return awards', () => {
      expect(controller.get().length).toBeGreaterThanOrEqual(12);
    });
  });
});
