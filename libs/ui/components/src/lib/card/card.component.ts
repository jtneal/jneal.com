import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'jneal-com-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  @Input()
  public title = '';

  @Input()
  public subTitle = '';

  @Input()
  public subText = '';

  @Input()
  public isTeaser = false;
}
