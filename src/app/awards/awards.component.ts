import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Award } from './awards';
import { AwardsService } from './awards.service';

@Component({
  selector: 'app-awards',
  styleUrls: ['./awards.component.scss'],
  templateUrl: './awards.component.html',
})
export class AwardsComponent implements OnInit {
  public awards$: Observable<Award[]> = of([]);

  public constructor(private readonly awards: AwardsService) { }

  public ngOnInit(): void {
    this.awards$ = this.awards.get();
  }
}
