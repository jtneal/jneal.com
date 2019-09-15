import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { IPortfolio } from '../portfolio';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
})
export class PortfolioListComponent implements OnInit {
  public portfolios$: Observable<IPortfolio[]>;

  constructor(private portfolios: PortfolioService) {}

  public ngOnInit() {
    this.portfolios$ = this.portfolios.get();
  }
}
