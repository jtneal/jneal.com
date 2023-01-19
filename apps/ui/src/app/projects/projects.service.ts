// tslint:disable:object-literal-sort-keys
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProjectDto } from '@jneal.com/shared/dtos';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { nullProject } from './projects';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  public constructor(private readonly http: HttpClient) {}

  public get(): Observable<ProjectDto[]> {
    return this.http.get<ProjectDto[]>(`${environment.bffUrl}/api/projects`);
  }

  public getLatest(): Observable<ProjectDto[]> {
    return this.get().pipe(
      map((projects) => projects.slice(0, 6)),
    );
  }

  public getItem(uri: string): Observable<ProjectDto> {
    return this.get().pipe(
      map((projects) => projects.find((project) => project.uri === uri) || nullProject),
    );
  }
}
