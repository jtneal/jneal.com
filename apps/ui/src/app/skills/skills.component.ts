import { Component } from '@angular/core';

import { SkillsService } from './skills.service';

@Component({
  selector: 'jneal-com-skills',
  styleUrls: [],
  templateUrl: './skills.component.html',
})
export class SkillsComponent {
  public skills$ = this.skills.get();

  public constructor(private readonly skills: SkillsService) {}
}
