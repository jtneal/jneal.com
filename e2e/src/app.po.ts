import { browser, by, element } from 'protractor';

export class AppPage {
  public async navigateTo(path = ''): Promise<unknown> {
    return browser.get(`${browser.baseUrl}${path}`);
  }

  public async getTitleText(): Promise<string> {
    return element(by.css('h1')).getText();
  }

  public async getCardCount(): Promise<number> {
    return element.all(by.css('.card')).count();
  }
}
