import { AppPage } from './app.po';
import { browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });

  it('should add todo in the last of list', () => {
    const todo = 'TODO AUTOMATE';
    page.navigateTo();
    page.fillInput(todo);
    page.clickAddButton();
    expect(page.getLastTodo()).toContain(todo);
    browser.sleep(3000);
  });
});
