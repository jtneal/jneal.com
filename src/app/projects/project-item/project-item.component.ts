import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { nullProject, Project } from '../projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-item',
  styleUrls: ['./project-item.component.scss'],
  templateUrl: './project-item.component.html',
})
export class ProjectItemComponent implements OnInit {
  public project$: Observable<Project> = of(nullProject);

  public constructor(
    private readonly projects: ProjectsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
  ) { }

  public ngOnInit(): void {
    this.project$ = this.route.paramMap.pipe(
      switchMap((params) => this.projects.getItem(params.get('uri') as string)),
      map((project) => this.handleNullProject(project)),
    );
  }

  private handleNullProject(project: Project): Project {
    if (project === nullProject) {
      this.router.navigate(['/404']);
    }

    return project;
  }
}
