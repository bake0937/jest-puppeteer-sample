describe('環境変数別にページが遷移するか', () => {
  if (process.env.ENVIORMENT == 'GOOGLE') {
    beforeAll(async () => {
      await page.goto('https://www.google.co.jp/');
    });
    it('should be titled "Google"', async () => {
      await expect(page.title()).resolves.toMatch('Google');
    });
  } else if (process.env.ENVIORMENT == 'YAHOO') {
    beforeAll(async () => {
      await page.goto('https://www.yahoo.co.jp/');
    });
    it('should be titled "Yahoo! Japan"', async () => {
      await expect(page.title()).resolves.toMatch('Yahoo! JAPAN');
    });
  } else {
    beforeAll(async () => {
      await page.goto('https://www.bing.com/');
    });
    it('should be titled "Bing"', async () => {
      await expect(page.title()).resolves.toMatch('Bing');
    });
  }
});
