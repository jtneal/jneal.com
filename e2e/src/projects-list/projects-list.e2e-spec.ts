import { noBrowserErrorsAssertion } from '../test-helper';
import { ProjectsListPage } from './projects-list.po';

describe('Projects List', () => {
  let page: ProjectsListPage;

  beforeEach(() => {
    page = new ProjectsListPage();
  });

  it('should display title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Projects');
  });

  it('should display multiple cards', async () => {
    await page.navigateTo();
    expect(await page.getCardCount()).toBeGreaterThanOrEqual(81);
  });

  afterEach(noBrowserErrorsAssertion);
});
