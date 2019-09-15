import { browser, logging } from 'protractor';

import { HomePage } from './home.po';

describe('Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
  });

  it('should display headlines', () => {
    page.navigateTo();

    expect(page.getHeadlineText(0)).toContain('Recent Work');
    expect(page.getHeadlineText(1)).toContain('Software Engineer, Charlotte, NC');
  });

  it('should display portfolio items', () => {
    page.navigateTo();

    expect(page.getPortfolioCount()).toBe(6);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);

    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
