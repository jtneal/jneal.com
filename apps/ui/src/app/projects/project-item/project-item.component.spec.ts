import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { nullProject } from '../projects';
import { ProjectsService } from '../projects.service';
import { ProjectItemComponent } from './project-item.component';

describe('ProjectItemComponent', () => {
  const mock: ProjectDto = {
    company: 'Company',
    date: 1111111111111,
    description: 'Description',
    image: 'Image',
    location: 'Location',
    skills: ['Skill'],
    title: 'Title',
    uri: 'URI',
    url: 'URL',
  };
  const spy = jest.fn();
  let component: ProjectItemComponent;
  let fixture: ComponentFixture<ProjectItemComponent>;
  let route: ActivatedRoute;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectItemComponent,
      ],
      imports: [
        RouterTestingModule,
      ],
      providers: [
        {
          provide: ProjectsService,
          useValue: { getItem: spy },
        },
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
    jest.spyOn(route, 'paramMap', 'get').mockReturnValue(of(convertToParamMap({ uri: 'test' })));
  });

  it('should create', () => {
    spy.mockReturnValue(of(mock));
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should have project from initialization', async () => {
    spy.mockReturnValue(of(mock));
    fixture.detectChanges();
    expect(await firstValueFrom(component.project$)).toEqual(mock);
  });

  it('should redirect to 404 when project not found', async () => {
    spy.mockReturnValue(of(nullProject));
    jest.spyOn(router, 'navigate').mockReturnValue(Promise.resolve(true));
    fixture.detectChanges();
    expect(router.navigate).toHaveBeenCalledWith(['/404']);
  });
});
