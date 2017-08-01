import {start} from './test/fakes/fake-server';

export const config = {
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['test/**/*.e2e.js'],
  baseUrl: 'http://localhost:3100/',
  onPrepare() {
    browser.ignoreSynchronization = true;
    start(3100);
  }
};
