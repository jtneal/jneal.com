import { noBrowserErrorsAssertion } from '../test-helper';
import { SkillsPage } from './skills.po';

describe('Skills', () => {
  let page: SkillsPage;

  beforeEach(() => {
    page = new SkillsPage();
  });

  it('should display title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Skills');
  });

  it('should display multiple cards', async () => {
    await page.navigateTo();
    expect(await page.getCardCount()).toBeGreaterThanOrEqual(8);
  });

  afterEach(noBrowserErrorsAssertion);
});
