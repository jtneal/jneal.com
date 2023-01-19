import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { ProjectsService } from '../../projects/projects.service';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
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
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        FooterComponent,
      ],
      providers: [
        {
          provide: ProjectsService,
          useValue: { getLatest: () => of(mock) },
        },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have projects from initialization', async () => {
    expect(await firstValueFrom(component.projects$)).toEqual(mock);
  });
});
