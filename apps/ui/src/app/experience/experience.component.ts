import { Component } from '@angular/core';

import { ExperienceService } from './experience.service';

@Component({
  selector: 'jneal-com-experience',
  styleUrls: [],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent {
  public experiences$ = this.experience.get();

  public constructor(private readonly experience: ExperienceService) {}
}
