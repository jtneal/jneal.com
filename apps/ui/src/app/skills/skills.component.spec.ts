import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SkillDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { SkillsComponent } from './skills.component';
import { SkillsService } from './skills.service';

describe('SkillsComponent', () => {
  const mock: SkillDto[] = [
    {
      category: 'Category',
      skills: ['Skill'],
    },
  ];
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsComponent,
      ],
      providers: [
        {
          provide: SkillsService,
          useValue: { get: () => of(mock) },
        },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have skills from initialization', async () => {
    expect(await firstValueFrom(component.skills$)).toEqual(mock);
  });
});
