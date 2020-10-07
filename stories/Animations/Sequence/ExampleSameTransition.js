import React from 'react';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import OrangeDiv from '../OrangeDiv';
import Dropdown from 'wix-style-react/dist/src/Dropdown';
import PropTypes from 'prop-types';

class ExampleMixedChildren extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      useSameTransition: true
    };

    this.options = [
      {id: true, value: '{useSameTransition: true}'},
      {id: false, value: '{useSameTransition: false}'}
    ];
  }

  render() {
    const {show} = this.props;
    const directionIn = show ? 'left' : 'right';
    const directionOut = show ? 'right' : 'left';

    return (
      <div style={{display: 'flex'}}>
        <div style={{flexGrow: 1}}>
          <Dropdown
            width="150px"
            selectedId={this.state.useSameTransition}
            onSelect={option => this.setState({useSameTransition: option.id})}
            options={this.options}
            />
        </div>
        <div style={{overflow: 'hidden', height: '100px', width: '740px', position: 'relative'}}>
          <Animator childClassName={css.absolute} translate={{enter: {direction: directionIn, size: '100%'}, exit: {direction: directionOut, size: '100%'}, useSameTransition: this.state.useSameTransition}}>
            {show && <StyledDiv style={{opacity: '0.5'}}>I am transparent so you can see the animation is smooth when using
              <pre style={{margin: 0, display: 'inline'}}>{`{`}useSameTransition: true{`}`}</pre>
            </StyledDiv>}
            {!show && <OrangeDiv style={{opacity: '0.5'}}>Check out the code to see how it is being done</OrangeDiv>}
          </Animator>
        </div>
      </div>
    );
  }
}

ExampleMixedChildren.propTypes = {
  show: PropTypes.boolean
};

export default () =>
  <AnimationTemplate>
    <ExampleMixedChildren/>
  </AnimationTemplate>;

