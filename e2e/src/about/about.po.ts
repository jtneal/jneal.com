import { browser, by, element } from 'protractor';

export class AboutPage {
  public navigateTo() {
    return browser.get(`${browser.baseUrl}about`) as Promise<any>;
  }

  public getHeadlineText(index: number) {
    return element.all(by.css('app-about h1')).get(index).getText() as Promise<string>;
  }
}
