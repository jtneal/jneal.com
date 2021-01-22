import { AppPage } from '../app.po';

export class ProjectsItemPage extends AppPage {
  public async navigateTo(): Promise<unknown> {
    return super.navigateTo('projects/quality-report');
  }
}
