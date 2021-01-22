import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { Project } from '../projects';
import { ProjectsService } from '../projects.service';
import { ProjectListComponent } from './project-list.component';

describe('ProjectListComponent', () => {
  const mock: Project[] = [
    {
      company: 'Company',
      date: 1111111111111,
      description: 'Description',
      id: 1,
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
  let service: ProjectsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectListComponent,
      ],
      imports: [
        RouterTestingModule,
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
    service = TestBed.inject<ProjectsService>(ProjectsService);
    spyOn(service, 'get').and.returnValue(of(mock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects from initialization', async () => {
    expect(await component.projects$.toPromise()).toEqual(mock);
  });

  it('should navigate to project', async () => {
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    component.viewProject(mock[0]);
    expect(router.navigate).toHaveBeenCalledOnceWith(['/projects', 'URI']);
  });
});
