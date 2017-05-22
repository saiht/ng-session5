import { NgSession5Page } from './app.po';

describe('ng-session5 App', () => {
  let page: NgSession5Page;

  beforeEach(() => {
    page = new NgSession5Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
