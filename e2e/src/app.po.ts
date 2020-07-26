import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getClockText(): Promise<string> {
    console.log('func to get text');
    return element(by.css('.clock.main-text')).getText() as Promise<string>;
  }
}
