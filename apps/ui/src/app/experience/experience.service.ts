import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ExperienceDto } from '@jneal.com/shared/dtos';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ExperienceService {
  public constructor(private readonly http: HttpClient) {}

  public get(): Observable<ExperienceDto[]> {
    return this.http.get<ExperienceDto[]>(`${environment.bffUrl}/api/experience`);
  }
}
