import { AppPage } from '../app.po';

export class ExperiencePage extends AppPage {
  public async navigateTo(): Promise<unknown> {
    return super.navigateTo('experience');
  }
}
