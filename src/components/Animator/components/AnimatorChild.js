import React, {Component} from 'react';
import {node, object, any, number} from 'prop-types';
import AnimatorContent from './AnimatorContent';
import AnimatorChildStyle from '../helpers/animator-child-styles';
import AnimatorChildClasses from '../helpers/animator-child-classes';
import ReactDOM from 'react-dom';
import getDimensions from '../helpers/get-dimensions';

class AnimatorChild extends Component {
  contentRef = React.createRef();
  node;
  state = {
    dimensions: {
      height: 0,
      width: 0,
    },
  };

  getSnapshotBeforeUpdate({animatorProps: {height, width}}) {
    const isDimensionAnimation = height || width;
    if (isDimensionAnimation) {
      if (!this.node) {
        // eslint-disable-next-line react/no-find-dom-node
        this.node = ReactDOM.findDOMNode(this.contentRef.current);
      }
      return {dimensions: getDimensions(this.node, {height, width})};
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {
      transition: {entering, exiting},
    } = this.props;
    const isTransitioning = entering || exiting;
    if (
      prevProps.transition !== this.props.transition &&
      isTransitioning &&
      snapshot
    ) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({dimensions: snapshot.dimensions});
    }
  }

  render() {
    const {children} = this.props;
    const {dimensions} = this.state;
    const [style1, style2, style3] = new AnimatorChildStyle(
      this.props,
      dimensions
    ).get();
    const [class1, class2, class3] = new AnimatorChildClasses(this.props).get();

    return (
      <div className={class1} style={style1}>
        <div className={class2} style={style2}>
          <div className={class3} style={style3}>
            <AnimatorContent ref={this.contentRef}>{children}</AnimatorContent>
          </div>
        </div>
      </div>
    );
  }
}

AnimatorChild.propTypes = {
  children: node,
  animatorProps: object,
  animatorChildClassName: any,
  animatorChildStyle: any,
  sequenceIndex: number,
  transition: object,
};

export default AnimatorChild;
