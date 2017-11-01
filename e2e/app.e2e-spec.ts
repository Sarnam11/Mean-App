import { LearningMeanAppPage } from './app.po';

describe('learning-mean-app App', function() {
  let page: LearningMeanAppPage;

  beforeEach(() => {
    page = new LearningMeanAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
