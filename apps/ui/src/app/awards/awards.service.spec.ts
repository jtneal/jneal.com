import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { AwardDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { AwardsService } from './awards.service';

describe('AwardsService', () => {
  const mock: AwardDto[] = [
    {
      date: 'January 2021',
      descriptions: ['Description'],
      title: 'Title',
      type: 'Type',
    },
  ];
  let service: AwardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: { get: () => of(mock) },
        },
      ],
    });
    service = TestBed.inject(AwardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get awards', async () => {
    const awards = await firstValueFrom(service.get());
    expect(awards).toEqual(mock);
  });
});
