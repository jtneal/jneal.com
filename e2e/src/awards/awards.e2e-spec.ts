import { noBrowserErrorsAssertion } from '../test-helper';
import { AwardsPage } from './awards.po';

describe('Awards', () => {
  let page: AwardsPage;

  beforeEach(() => {
    page = new AwardsPage();
  });

  it('should display title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Awards');
  });

  it('should display multiple cards', async () => {
    await page.navigateTo();
    expect(await page.getCardCount()).toBeGreaterThanOrEqual(12);
  });

  afterEach(noBrowserErrorsAssertion);
});
