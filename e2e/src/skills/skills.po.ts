import { browser, by, element } from 'protractor';

export class SkillsPage {
  public navigateTo() {
    return browser.get(`${browser.baseUrl}skills`) as Promise<any>;
  }

  public getHeadlineText(index: number) {
    return element.all(by.css('app-skills h1')).get(index).getText() as Promise<string>;
  }

  public getSkillsCategoryCount() {
    return element.all(by.css('app-skills h2')).count() as Promise<number>;
  }
}
