import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Project } from '../../projects/projects';
import { ProjectsService } from '../../projects/projects.service';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  const mock: Project[] = [
    {
      id: 1,
      date: 1111111111111,
      title: 'Title',
      uri: 'URI',
      location: 'Location',
      url: 'URL',
      image: 'Image',
      description: 'Description',
      company: 'Company',
      skills: ['Skill'],
    },
  ];
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let service: ProjectsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    service = TestBed.inject<ProjectsService>(ProjectsService);
    spyOn(service, 'getLatest').and.returnValue(of(mock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects from initialization', async () => {
    expect(await component.projects$.toPromise()).toEqual(mock);
  });
});
