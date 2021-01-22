import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Experience } from './experience';
import { ExperienceService } from './experience.service';

@Component({
  selector: 'app-experience',
  styleUrls: ['./experience.component.scss'],
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements OnInit {
  public experiences$: Observable<Experience[]> = of([]);

  public constructor(private readonly experience: ExperienceService) { }

  public ngOnInit(): void {
    this.experiences$ = this.experience.get();
  }
}
