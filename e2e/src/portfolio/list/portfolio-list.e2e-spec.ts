import { browser, logging } from 'protractor';

import { PortfolioListPage } from './portfolio-list.po';

describe('Portfolio List Page', () => {
  let page: PortfolioListPage;

  beforeEach(() => {
    page = new PortfolioListPage();
  });

  it('should display headlines', () => {
    page.navigateTo();

    expect(page.getHeadlineText(0)).toContain('Portfolio');
  });

  it('should display portfolio items', () => {
    page.navigateTo();

    expect(page.getPortfolioCount()).toBeGreaterThan(0);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);

    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
