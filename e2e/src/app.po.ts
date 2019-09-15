import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  public getLogoAltText() {
    return element(by.css('app-root header img')).getAttribute('alt') as Promise<string>;
  }

  public getNavText(index: number) {
    return element.all(by.css('app-root .nav a')).get(index).getText() as Promise<string>;
  }

  public getSocialIconText(index: number) {
    return element.all(by.css('app-root .social a')).get(index).getText() as Promise<string>;
  }

  public getFooterHeadlineText(index: number) {
    return element.all(by.css('app-root footer h2')).get(index).getText() as Promise<string>;
  }

  public getFooterLinkCount() {
    return element.all(by.css('app-root footer li')).count() as Promise<number>;
  }
}
