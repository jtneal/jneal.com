import { Test } from '@nestjs/testing';

import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

describe('ProjectsController', () => {
  let controller: ProjectsController;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [ProjectsService],
    }).compile();

    controller = app.get<ProjectsController>(ProjectsController);
  });

  describe('get', () => {
    it('should return projects', () => {
      expect(controller.get().length).toBeGreaterThanOrEqual(81);
    });
  });
});
