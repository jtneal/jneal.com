import { AppPage } from '../app.po';

export class SkillsPage extends AppPage {
  public async navigateTo(): Promise<unknown> {
    return super.navigateTo('skills');
  }
}
