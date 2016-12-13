import { Angular2Training13DecPage } from './app.po';

describe('angular-2-training-13-dec App', function() {
  let page: Angular2Training13DecPage;

  beforeEach(() => {
    page = new Angular2Training13DecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
