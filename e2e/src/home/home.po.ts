import { browser, by, element } from 'protractor';

export class HomePage {
  public navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  public getHeadlineText(index: number) {
    return element.all(by.css('app-home h1')).get(index).getText() as Promise<string>;
  }

  public getPortfolioCount() {
    return element.all(by.css('app-home .featured-content img')).count() as Promise<number>;
  }
}
