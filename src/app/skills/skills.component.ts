import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from './skills';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  styleUrls: [],
  templateUrl: './skills.component.html',
})
export class SkillsComponent implements OnInit {
  public skills$: Observable<Skill[]> = of([]);

  public constructor(private readonly skills: SkillsService) { }

  public ngOnInit(): void {
    this.skills$ = this.skills.get();
  }
}
