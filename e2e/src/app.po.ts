import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  fillInput(todo: string) {
    element(by.css('.form-control input')).sendKeys(todo);
  }

  clickAddButton() {
    element(by.css('.form-control button')).click();
  }

  getLastTodo() {
    return element.all(by.css('.todo-list li')).last().getText();
  }
}
