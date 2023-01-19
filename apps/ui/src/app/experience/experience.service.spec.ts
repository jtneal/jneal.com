import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { ExperienceDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { ExperienceService } from './experience.service';

describe('ExperienceService', () => {
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
  let service: ExperienceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: { get: () => of(mock) },
        },
      ],
    });
    service = TestBed.inject(ExperienceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get experiences', async () => {
    const experiences = await firstValueFrom(service.get());
    expect(experiences).toEqual(mock);
  });
});
