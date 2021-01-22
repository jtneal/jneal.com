import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { nullProject, Project } from '../projects';
import { ProjectsService } from '../projects.service';
import { ProjectItemComponent } from './project-item.component';

describe('ProjectItemComponent', () => {
  const mock: Project = {
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
  };
  let component: ProjectItemComponent;
  let fixture: ComponentFixture<ProjectItemComponent>;
  let route: ActivatedRoute;
  let router: Router;
  let service: ProjectsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectItemComponent,
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
    fixture = TestBed.createComponent(ProjectItemComponent);
    component = fixture.componentInstance;
    route = TestBed.inject<ActivatedRoute>(ActivatedRoute);
    router = TestBed.inject<Router>(Router);
    service = TestBed.inject<ProjectsService>(ProjectsService);
    spyOnProperty(route, 'paramMap').and.returnValue(of({ get: () => 'test' }));
  });

  it('should create', () => {
    spyOn(service, 'getItem').and.returnValue(of(mock));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have project from initialization', async () => {
    spyOn(service, 'getItem').and.returnValue(of(mock));
    fixture.detectChanges();
    expect(await component.project$.toPromise()).toEqual(mock);
  });

  it('should redirect to 404 when project not found', async () => {
    spyOn(router, 'navigate').and.returnValue(Promise.resolve(true));
    spyOn(service, 'getItem').and.returnValue(of(nullProject));
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledOnceWith(['/404']);
  });
});
