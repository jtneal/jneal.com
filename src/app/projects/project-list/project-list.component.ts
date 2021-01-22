import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Project } from '../projects';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-project-list',
  styleUrls: ['./project-list.component.scss'],
  templateUrl: './project-list.component.html',
})
export class ProjectListComponent implements OnInit {
  public projects$: Observable<Project[]> = of([]);

  public constructor(
    private readonly projects: ProjectsService,
    private readonly router: Router,
  ) { }

  public ngOnInit(): void {
    this.projects$ = this.projects.get();
  }

  public viewProject(project: Project): void {
    this.router.navigate(['/projects', project.uri]);
  }
}
