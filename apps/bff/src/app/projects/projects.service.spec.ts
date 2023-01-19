import { Test } from '@nestjs/testing';

import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [ProjectsService],
    }).compile();

    service = app.get<ProjectsService>(ProjectsService);
  });

  describe('get', () => {
    it('should return projects', () => {
      expect(service.get().length).toBeGreaterThanOrEqual(81);
    });
  });
});
