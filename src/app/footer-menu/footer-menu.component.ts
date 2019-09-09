import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
})
export class FooterMenuComponent {
  @Input() public links: { external: boolean, name: string, url: string };
  @Input() public name: string;
}
