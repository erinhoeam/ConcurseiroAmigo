import { ConcurseiroAmigo.SitePage } from './app.po';

describe('concurseiro-amigo.site App', () => {
  let page: ConcurseiroAmigo.SitePage;

  beforeEach(() => {
    page = new ConcurseiroAmigo.SitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
