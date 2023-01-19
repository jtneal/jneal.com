import { Component } from '@angular/core';

import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'jneal-com-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  public projects$ = this.projects.getLatest();

  public constructor(private readonly projects: ProjectsService) {}
}
