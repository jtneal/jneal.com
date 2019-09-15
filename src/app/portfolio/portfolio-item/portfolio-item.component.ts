import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { IPortfolio } from '../portfolio';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-portfolio-item',
  styleUrls: ['./portfolio-item.component.scss'],
  templateUrl: './portfolio-item.component.html',
})
export class PortfolioItemComponent implements OnInit {
  public portfolio$: Observable<IPortfolio>;

  constructor(private location: Location, private portfolios: PortfolioService, private route: ActivatedRoute) {}

  public ngOnInit() {
    this.portfolio$ = this.route.paramMap.pipe(
      switchMap((params) => this.portfolios.getItem(params.get('uri'))),
    );
  }

  public goBack() {
    this.location.back();
  }
}
