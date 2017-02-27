import { MyContactsUIPage } from './app.po';

describe('my-contacts-ui App', function() {
  let page: MyContactsUIPage;

  beforeEach(() => {
    page = new MyContactsUIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
