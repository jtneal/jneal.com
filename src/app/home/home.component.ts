import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IPortfolio } from '../portfolio/portfolio';
import { PortfolioService } from '../portfolio/portfolio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public portfolios$: Observable<IPortfolio[]>;

  constructor(private portfolios: PortfolioService) {}

  public ngOnInit() {
    this.portfolios$ = this.portfolios.getLatest();
  }
}
