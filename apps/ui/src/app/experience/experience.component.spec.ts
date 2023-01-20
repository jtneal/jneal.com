import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { ExperienceComponent } from './experience.component';
import { ExperienceService } from './experience.service';

describe('ExperienceComponent', () => {
  const mock: ExperienceDto[] = [
    {
      company: 'Company',
      dates: 'Dates',
      description: 'Description',
      details: ['Details'],
      location: 'Location',
      title: 'Title',
    },
  ];
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExperienceComponent,
      ],
      providers: [
        {
          provide: ExperienceService,
          useValue: { get: () => of(mock) },
        },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have experiences from initialization', async () => {
    expect(await firstValueFrom(component.experiences$)).toEqual(mock);
  });
});
