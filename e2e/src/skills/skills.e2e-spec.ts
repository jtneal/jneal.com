import { browser, logging } from 'protractor';

import { SkillsPage } from './skills.po';

describe('Skills Page', () => {
  let page: SkillsPage;

  beforeEach(() => {
    page = new SkillsPage();
  });

  it('should display headlines', () => {
    page.navigateTo();

    expect(page.getHeadlineText(0)).toContain('Skills');
  });

  it('should display skills categories', () => {
    page.navigateTo();

    expect(page.getSkillsCategoryCount()).toBe(8);
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);

    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
