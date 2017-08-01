describe('React application', () => {
  describe('open page', () => {
    it('should display title', () => {
      browser.get('/');
      expect($('h2').getText()).toBe('Hello World!');
    });
  });
});
