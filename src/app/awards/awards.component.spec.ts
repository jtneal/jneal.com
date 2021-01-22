import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Award } from './awards';
import { AwardsComponent } from './awards.component';
import { AwardsService } from './awards.service';

describe('AwardsComponent', () => {
  const mock: Award[] = [
    {
      date: 'January 2021',
      descriptions: ['Description'],
      id: 1,
      title: 'Title',
      type: 'Type',
    },
  ];
  let component: AwardsComponent;
  let fixture: ComponentFixture<AwardsComponent>;
  let service: AwardsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AwardsComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject<AwardsService>(AwardsService);
    spyOn(service, 'get').and.returnValue(of(mock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have awards from initialization', async () => {
    expect(await component.awards$.toPromise()).toEqual(mock);
  });
});
