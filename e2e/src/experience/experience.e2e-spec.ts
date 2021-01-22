import { noBrowserErrorsAssertion } from '../test-helper';
import { ExperiencePage } from './experience.po';

describe('Experience', () => {
  let page: ExperiencePage;

  beforeEach(() => {
    page = new ExperiencePage();
  });

  it('should display title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Experience');
  });

  it('should display multiple cards', async () => {
    await page.navigateTo();
    expect(await page.getCardCount()).toBeGreaterThanOrEqual(9);
  });

  afterEach(noBrowserErrorsAssertion);
});
