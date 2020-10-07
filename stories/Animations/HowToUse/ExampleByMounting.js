import React from 'react';
import Animator from '../../../src/components/Animator';
import ShowHideControls from '../ShowHideControls';
import StyledDiv from '../StyledDiv';
import PropTypes from 'prop-types';

const ExampleInByProp = ({ show }) => {
  const content = show ? (
    <StyledDiv>
      I mount and unmount and my parent does not have the {`'show'`} prop
    </StyledDiv>
  ) : null;

  /* This is valid too: const content = show && <StyledDiv />; */
  /* And also this: const content = show ? [<StyledDiv />] : []; */

  return (
    <Animator opacity height>
      {content}
    </Animator>
  );
};

ExampleInByProp.propTypes = {
  show: PropTypes.bool,
};

export default () => (
  <ShowHideControls>
    <ExampleInByProp />
  </ShowHideControls>
);
