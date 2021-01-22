import { AppPage } from '../app.po';

export class ProjectsListPage extends AppPage {
  public async navigateTo(): Promise<unknown> {
    return super.navigateTo('projects');
  }
}
