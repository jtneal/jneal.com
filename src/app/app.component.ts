import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IPortfolio } from './portfolio/portfolio';
import { PortfolioService } from './portfolio/portfolio.service';

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
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
    url: 'https://blog.jneal.org/',
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

  public portfolios$: Observable<IPortfolio[]>;

  constructor(private portfolios: PortfolioService) {}

  public ngOnInit() {
    this.portfolios$ = this.portfolios.getLatest();
  }
}
