import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { SkillDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { SkillsService } from './skills.service';

describe('SkillsService', () => {
  const mock: SkillDto[] = [
    {
      category: 'Category',
      skills: ['Skill'],
    },
  ];
  let service: SkillsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: { get: () => of(mock) },
        },
      ],
    });
    service = TestBed.inject(SkillsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get skills', async () => {
    const skills = await firstValueFrom(service.get());
    expect(skills).toEqual(mock);
  });
});
