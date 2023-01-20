import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ProjectDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { nullProject } from './projects';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  const mock: ProjectDto[] = [
    {
      company: 'Company',
      date: 1111111111111,
      description: 'Description',
      image: 'Image',
      location: 'Location',
      skills: ['Skill'],
      title: 'Title',
      uri: 'URI',
      url: 'URL',
    },
  ];
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: { get: () => of(mock) },
        },
      ],
    });
    service = TestBed.inject(ProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get projects', async () => {
    const projects = await firstValueFrom(service.get());
    expect(projects).toEqual(mock);
  });

  it('should get 6 latest projects', async () => {
    const projects = await firstValueFrom(service.getLatest());
    expect(projects).toEqual(mock);
  });

  it('should get specific project', async () => {
    const project = await firstValueFrom(service.getItem('URI'));
    expect(project.title).toEqual('Title');
  });

  it('should return null project', async () => {
    const project = await firstValueFrom(service.getItem('null'));
    expect(project).toEqual(nullProject);
  });
});
