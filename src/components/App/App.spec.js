import 'jsdom-global/register';
import React from 'react';
import {expect} from 'chai';
import {mount} from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  afterEach(() => wrapper.detach());

  it('renders a title correctly', () => {
    wrapper = mount(
      <App/>, {attachTo: document.createElement('div')}
    );
    expect(wrapper.find('h2').length).to.eq(1);
  });
});
