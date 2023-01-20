import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AwardDto } from '@jneal.com/shared/dtos';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AwardsService {
  public constructor(private readonly http: HttpClient) {}

  public get(): Observable<AwardDto[]> {
    return this.http.get<AwardDto[]>(`${environment.bffUrl}/api/awards`);
  }
}
