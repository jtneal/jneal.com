import { noBrowserErrorsAssertion } from '../test-helper';
import { AboutPage } from './about.po';

describe('About', () => {
  let page: AboutPage;

  beforeEach(() => {
    page = new AboutPage();
  });

  it('should display title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('About');
  });

  afterEach(noBrowserErrorsAssertion);
});
