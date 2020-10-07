import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextButton from '../TextButton';
import copy from 'copy-to-clipboard';
import Markdown from '../Markdown';

const toCodeBlock = (code, type = 'js') =>
  ['```' + type, code.trim(), '```'].join('\n');

export default class CodeBlock extends Component {
  static propTypes = {
    source: PropTypes.string,
    type: PropTypes.string,
  };

  static defaultProps = {
    type: 'js',
  };

  constructor(props) {
    super(props);
    this.state = { showNotification: false };
  }

  render() {
    const { source, type } = this.props;
    const copyToClipboardClicked = () => {
      copy(source);
      this.setState({ showNotification: true });
    };
    return (
      <div>
        <TextButton onClick={copyToClipboardClicked}>
          Copy to clipboard
        </TextButton>
        <Markdown source={toCodeBlock(source, type)} />
      </div>
    );
  }
}
