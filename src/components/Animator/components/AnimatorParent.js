import React from 'react';
import {node, string, oneOfType, any, bool} from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import formatProps from '../helpers/format-props';
import CSSTransitionWrapper from './CSSTransitionWrapper';
import Debug from './Debug';

class AnimatorParent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      debug: false
    };
  }

  render() {
    const {className, dataHook} = this.props;
    const animatorProps = formatProps(this.props);
    animatorProps.debug = this.state.debug;
    return (
      <TransitionGroup data-hook={dataHook} className={className}>
        {animatorProps.children.map((item, index) =>
          <CSSTransitionWrapper key={item.key || index} index={index} {...item.props} animatorProps={animatorProps}>
            {item}
          </CSSTransitionWrapper>
        )}
        {this.props.debug && <Debug hasChildren={!!animatorProps.children.length} onSelect={debug => this.setState({debug})}/>}
      </TransitionGroup>
    );
  }
}

AnimatorParent.propTypes = {
  sequence: oneOfType([bool, string]),
  translate: any,
  children: node,
  className: any,
  show: any,
  dataHook: any,
  debug: bool
};

export default AnimatorParent;
