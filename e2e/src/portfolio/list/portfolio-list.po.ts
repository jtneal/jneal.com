import { browser, by, element } from 'protractor';

export class PortfolioListPage {
  public navigateTo() {
    return browser.get(`${browser.baseUrl}portfolio`) as Promise<any>;
  }

  public getHeadlineText(index: number) {
    return element.all(by.css('app-portfolio-list h1')).get(index).getText() as Promise<string>;
  }

  public getPortfolioCount() {
    return element.all(by.css('app-portfolio-list img')).count() as Promise<number>;
  }
}
