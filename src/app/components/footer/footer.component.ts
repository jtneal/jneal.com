import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from '../../projects/projects';
import { ProjectsService } from '../../projects/projects.service';

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  public projects$: Observable<Project[]> = of([]);

  public constructor(private readonly projects: ProjectsService) { }

  public ngOnInit(): void {
    this.projects$ = this.projects.getLatest();
  }
}
