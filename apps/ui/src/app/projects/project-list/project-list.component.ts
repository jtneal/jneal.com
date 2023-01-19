import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDto } from '@jneal.com/shared/dtos';

import { ProjectsService } from '../projects.service';

@Component({
  selector: 'jneal-com-project-list',
  styleUrls: [],
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent {
  public projects$ = this.projects.get();

  public constructor(
    private readonly projects: ProjectsService,
    private readonly router: Router,
  ) {}

  public viewProject(project: ProjectDto): void {
    this.router.navigate(['/projects', project.uri]);
  }
}
