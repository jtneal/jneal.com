import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  public linksSocial = [{
    name: 'Facebook',
    url: 'https://www.facebook.com/jasonneal',
  }, {
    name: 'Twitter',
    url: 'https://twitter.com/jasonneal',
  }, {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/jasontneal',
  }];
  public linksMain = [{
    name: 'Home',
    url: '/',
  }, {
    external: true,
    name: 'Blog',
    url: '/blog',
  }, {
    name: 'About',
    url: '/about',
  }, {
    name: 'Skills',
    url: '/skills',
  }, {
    name: 'Portfolio',
    url: '/portfolio',
  }, {
    name: 'Resume',
    url: '/resume',
  }, {
    name: 'Contact',
    url: '/contact',
  }];
  public linksFriends = [{
    name: 'Quicken Loans',
    url: 'https://www.quickenloans.com/',
  }, {
    name: 'Erwin Penland',
    url: 'https://www.erwinpenland.com/',
  }, {
    name: 'Hannush Web',
    url: 'https://www.hannush.com/',
  }, {
    name: 'ZendCon',
    url: 'http://www.zendcon.com/',
  }, {
    name: 'OSCON',
    url: 'https://conferences.oreilly.com/oscon/oscon-tx',
  }, {
    name: 'REST Fest',
    url: 'https://www.restfest.org/',
  }];
  public linksFavoriteTechnology = [{
    name: 'PHP 7',
    url: 'https://secure.php.net/',
  }, {
    name: 'Silex',
    url: 'http://silex.sensiolabs.org/',
  }, {
    name: 'Angular',
    url: 'https://angular.io/',
  }, {
    name: 'TypeScript',
    url: 'https://www.typescriptlang.org/',
  }, {
    name: 'Docker',
    url: 'https://www.docker.com/',
  }, {
    name: 'Nginx',
    url: 'https://nginx.org/',
  }];
  public linksRecentWork = [{
    name: 'Inside Chick-fil-A',
    url: '/portfolio/75/inside-chick-fil-a',
  }, {
    name: 'Advance America',
    url: '/portfolio/74/advance-america',
  }, {
    name: 'National Cash Advance',
    url: '/portfolio/73/national-cash-advance',
  }, {
    name: 'Purpose Financial Services',
    url: '/portfolio/72/purpose-financial-services',
  }, {
    name: 'Denny\'s Denny\'s',
    url: '/portfolio/71/dennys-dennys',
  }, {
    name: 'Evolve USA',
    url: '/portfolio/70/evolve-usa',
  }];
}
