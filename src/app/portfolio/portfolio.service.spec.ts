import { TestBed } from '@angular/core/testing';

import { PortfolioService } from './portfolio.service';

describe('PortfolioService', () => {
  let service: PortfolioService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(PortfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get', async () => {
    const portfolios = await service.get().toPromise();

    expect(portfolios.length).toBeGreaterThan(0);
  });

  it('should get latest', async () => {
    const portfolios = await service.getLatest().toPromise();

    expect(portfolios.length).toBe(6);
  });

  it('should get item', async () => {
    const portfolio = await service.getItem('advance-america').toPromise();

    expect(portfolio.uri).toBe('advance-america');
  });
});
