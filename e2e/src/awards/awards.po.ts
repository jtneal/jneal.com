import { AppPage } from '../app.po';

export class AwardsPage extends AppPage {
  public async navigateTo(): Promise<unknown> {
    return super.navigateTo('awards');
  }
}
