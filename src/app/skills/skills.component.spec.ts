import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { Skill } from './skills';
import { SkillsComponent } from './skills.component';
import { SkillsService } from './skills.service';

describe('SkillsComponent', () => {
  const mock: Skill[] = [
    {
      category: 'Category',
      skills: ['Skill'],
    },
  ];
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  let service: SkillsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SkillsComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject<SkillsService>(SkillsService);
    spyOn(service, 'get').and.returnValue(of(mock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have skills from initialization', async () => {
    expect(await component.skills$.toPromise()).toEqual(mock);
  });
});
