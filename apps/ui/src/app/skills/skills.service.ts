import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SkillDto } from '@jneal.com/shared/dtos';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class SkillsService {
  public constructor(private readonly http: HttpClient) {}

  public get(): Observable<SkillDto[]> {
    return this.http.get<SkillDto[]>(`${environment.bffUrl}/api/skills`);
  }
}
