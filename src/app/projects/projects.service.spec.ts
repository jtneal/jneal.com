import { TestBed } from '@angular/core/testing';

import { nullProject } from './projects';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get projects', async () => {
    const projects = await service.get().toPromise();
    expect(projects.length).toBeGreaterThanOrEqual(81);
  });

  it('should get 6 latest projects', async () => {
    const projects = await service.getLatest().toPromise();
    expect(projects.length).toEqual(6);
  });

  it('should get specific project', async () => {
    const project = await service.getItem('quality-report').toPromise();
    expect(project.title).toEqual('Quality Report');
  });

  it('should return null project', async () => {
    const project = await service.getItem('null').toPromise();
    expect(project).toEqual(nullProject);
  });
});
