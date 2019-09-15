import { browser, logging } from 'protractor';

import { ResumePage } from './resume.po';

describe('Resume Page', () => {
  let page: ResumePage;

  beforeEach(() => {
    page = new ResumePage();
  });

  it('should display headlines', () => {
    page.navigateTo();

    expect(page.getHeadlineText(0)).toContain('Resume');
  });

  it('should display download button', () => {
    page.navigateTo();

    expect(page.getButtonText()).toContain('Download PDF');
  });

  it('should display section titles', () => {
    page.navigateTo();

    expect(page.getSectionTitle(0)).toContain('Skill Summary');
    expect(page.getSectionTitle(1)).toContain('Professional Experience');
    expect(page.getSectionTitle(2)).toContain('Education History');
    expect(page.getSectionTitle(3)).toContain('Final Words');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);

    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
