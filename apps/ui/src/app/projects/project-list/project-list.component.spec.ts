import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { ProjectsService } from '../projects.service';
import { ProjectListComponent } from './project-list.component';

describe('ProjectListComponent', () => {
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
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectListComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ProjectsService,
          useValue: { get: () => of(mock) },
        },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    router = TestBed.inject<Router>(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects from initialization', async () => {
    expect(await firstValueFrom(component.projects$)).toEqual(mock);
  });

  it('should navigate to project', async () => {
    jest.spyOn(router, 'navigate').mockReturnValue(Promise.resolve(true));
    component.viewProject(mock[0]);
    expect(router.navigate).toHaveBeenCalledWith(['/projects', 'URI']);
  });
});
