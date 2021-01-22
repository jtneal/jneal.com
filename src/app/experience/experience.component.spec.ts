import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Experience } from './experience';
import { ExperienceComponent } from './experience.component';
import { ExperienceService } from './experience.service';

describe('ExperienceComponent', () => {
  const mock: Experience[] = [
    {
      company: 'Company',
      dates: 'Dates',
      description: 'Description',
      details: ['Details'],
      id: 1,
      location: 'Location',
      title: 'Title',
    },
  ];
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;
  let service: ExperienceService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ExperienceComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    service = TestBed.inject<ExperienceService>(ExperienceService);
    spyOn(service, 'get').and.returnValue(of(mock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have experiences from initialization', async () => {
    expect(await component.experiences$.toPromise()).toEqual(mock);
  });
});
