import React from 'react';
import {node} from 'prop-types';

class AnimatorContent extends React.Component {

  cleanProps(props) {
    const newProps = Object.assign({}, props);
    delete newProps.animatorChildClassName;
    delete newProps.animatorChildStyle;
    return newProps;
  }

  render() {
    const {children} = this.props;
    return React.createElement(
      children.type || 'div',
      this.cleanProps(children.props),
      children.props ? children.props.children : children
    );
  }
}

AnimatorContent.propTypes = {
  children: node
};

export default AnimatorContent;
