import { browser, by, element } from 'protractor';

export class ResumePage {
  public navigateTo() {
    return browser.get(`${browser.baseUrl}resume`) as Promise<any>;
  }

  public getHeadlineText(index: number) {
    return element.all(by.css('app-resume h1')).get(index).getText() as Promise<string>;
  }

  public getButtonText() {
    return element(by.css('app-resume a.btn')).getText() as Promise<string>;
  }

  public getSectionTitle(index: number) {
    return element.all(by.css('app-resume h2')).get(index).getText() as Promise<string>;
  }
}
