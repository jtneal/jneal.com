import { noBrowserErrorsAssertion } from '../test-helper';
import { ProjectsItemPage } from './projects-item.po';

describe('Projects Item', () => {
  let page: ProjectsItemPage;

  beforeEach(() => {
    page = new ProjectsItemPage();
  });

  it('should display title', async () => {
    await page.navigateTo();
    expect(await page.getTitleText()).toEqual('Quality Report');
  });

  afterEach(noBrowserErrorsAssertion);
});
