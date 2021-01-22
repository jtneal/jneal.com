import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Project } from '../../projects/projects';
import { ProjectsService } from '../../projects/projects.service';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
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
