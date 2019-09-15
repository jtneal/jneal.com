import { browser, logging } from 'protractor';

import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display logo with alt text', () => {
    page.navigateTo();

    expect(page.getLogoAltText()).toEqual('Jason Neal | Software Engineer | Charlotte, NC');
  });

  it('should display navigation', () => {
    page.navigateTo();

    expect(page.getNavText(0)).toContain('Home');
    expect(page.getNavText(1)).toContain('Blog');
    expect(page.getNavText(2)).toContain('About');
    expect(page.getNavText(3)).toContain('Skills');
    expect(page.getNavText(4)).toContain('Portfolio');
    expect(page.getNavText(5)).toContain('Resume');
  });

  it('should display social icons', () => {
    page.navigateTo();

    expect(page.getSocialIconText(0)).toContain('Facebook');
    expect(page.getSocialIconText(1)).toContain('Twitter');
    expect(page.getSocialIconText(2)).toContain('LinkedIn');
  });

  it('should display footer headlines', () => {
    page.navigateTo();

    expect(page.getFooterHeadlineText(0)).toContain('Friends');
    expect(page.getFooterHeadlineText(1)).toContain('Favorite Technology');
    expect(page.getFooterHeadlineText(2)).toContain('Recent Work');
    expect(page.getFooterHeadlineText(3)).toContain('Contact Information');
  });

  it('should display footer links', () => {
    page.navigateTo();

    expect(page.getFooterLinkCount()).toBe(18);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);

    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
