import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AwardDto } from '@jneal.com/shared/dtos';
import { firstValueFrom, of } from 'rxjs';

import { AwardsComponent } from './awards.component';
import { AwardsService } from './awards.service';

describe('AwardsComponent', () => {
  const mock: AwardDto[] = [
    {
      date: 'January 2021',
      descriptions: ['Description'],
      title: 'Title',
      type: 'Type',
    },
  ];
  let component: AwardsComponent;
  let fixture: ComponentFixture<AwardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AwardsComponent,
      ],
      providers: [
        {
          provide: AwardsService,
          useValue: { get: () => of(mock) },
        },
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have awards from initialization', async () => {
    expect(await firstValueFrom(component.awards$)).toEqual(mock);
  });
});
