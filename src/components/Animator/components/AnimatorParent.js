import React from 'react';
import {node, string, oneOfType, any, bool} from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import formatProps from '../helpers/format-props';
import CSSTransitionWrapper from './CSSTransitionWrapper';

const AnimatorParent = props => {

  const {className, dataHook} = props;
  const animatorProps = formatProps(props);
  return (
    <TransitionGroup data-hook={dataHook} className={className}>
      {animatorProps.children.map((item, index) =>
        <CSSTransitionWrapper
          key={item.key || index}
          index={index}
          {...item.props}
          animatorProps={animatorProps}
          >
          {item}
        </CSSTransitionWrapper>
      )}
    </TransitionGroup>
  );
};

AnimatorParent.propTypes = {
  sequence: oneOfType([bool, string]),
  translate: any,
  children: node,
  className: any,
  show: any,
  dataHook: any
};

export default AnimatorParent;
