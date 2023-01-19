import { Component } from '@angular/core';

import { AwardsService } from './awards.service';

@Component({
  selector: 'jneal-com-awards',
  styleUrls: [],
  templateUrl: './awards.component.html',
})
export class AwardsComponent {
  public awards$ = this.awards.get();

  public constructor(private readonly awards: AwardsService) {}
}
