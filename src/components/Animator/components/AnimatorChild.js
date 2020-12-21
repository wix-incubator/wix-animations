import React, {Component} from 'react';
import {node, object, any, number} from 'prop-types';
import AnimatorContent from './AnimatorContent';
import AnimatorChildStyle from '../helpers/animator-child-styles';
import AnimatorChildClasses from '../helpers/animator-child-classes';
import ReactDOM from 'react-dom';
import getDimensions from '../helpers/get-dimensions';

/* eslint-disable */

class AnimatorChild extends Component {

  styles;
  node;
  dimensions;

  constructor(props) {
    super(props);
    this.dimensions = {
      height: 0,
      width: 0
    };
  }

  componentDidMount() {
    if (this.isDimensionAnimation()) {
      this.node = ReactDOM.findDOMNode(this.refs.content);
    }
  }

  isDimensionAnimation() {
    const {height, width} = this.props.animatorProps;
    return height || width;
  }

  componentDidUpdate() {
    const {transition: {entering, exiting}} = this.props;
    if (this.isDimensionAnimation() && (entering || exiting)) {
      this.setDimensions();
    }
  }

  setDimensions() {
    const {height, width} = this.props.animatorProps;
    this.dimensions = getDimensions(this.node, {height, width});
  }

  render() {
    const {children} = this.props;
    const [style1, style2, style3] = new AnimatorChildStyle(this.props, this.dimensions).get();
    const [class1, class2, class3] = new AnimatorChildClasses(this.props).get();

    return (
      <div className={class1} style={style1}>
        <div className={class2} style={style2}>
          <div className={class3} style={style3}>
            <AnimatorContent ref="content">{children}</AnimatorContent>
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
  transition: object
};

export default AnimatorChild;

/* eslint-enable */
