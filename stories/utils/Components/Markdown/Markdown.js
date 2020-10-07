import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Remarkable from 'react-remarkable';
import hljs from 'highlight.js';
import './Markdown.scss';

export default class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  render() {
    const shouldHideForE2E = process.env.STORYBOOK_E2E;

    const options = {
      linkTarget: '_parent',
      highlight(code, lang) {
        return hljs.highlight(lang, code).value;
      }
    };

    return !shouldHideForE2E ? (<div className="markdown-body">
      <Remarkable source={this.props.source} options={options}/>
    </div>) : null;
  }
}
