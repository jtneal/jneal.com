import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDto } from '@jneal.com/shared/dtos';
import { map, switchMap } from 'rxjs/operators';

import { nullProject } from '../projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'jneal-com-project-item',
  styleUrls: ['./project-item.component.scss'],
  templateUrl: './project-item.component.html',
})
export class ProjectItemComponent {
  public project$ = this.route.paramMap.pipe(
    switchMap((params) => this.projects.getItem(params.get('uri') as string)),
    map((project) => this.handleNullProject(project)),
  );

  public constructor(
    private readonly projects: ProjectsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) {}

  private handleNullProject(project: ProjectDto): ProjectDto {
    if (project === nullProject) {
      this.router.navigate(['/404']);
    }

    return project;
  }
}
