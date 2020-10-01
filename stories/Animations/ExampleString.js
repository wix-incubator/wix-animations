import React from 'react';
import Animator from '../../src/components/Animator';
import css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';
import PropTypes from 'prop-types';

const ExampleString = ({ show }) => {
  return (
    <div className={css.basicWrapper}>
      <Animator show={show} opacity scale>
        I am a simple string
      </Animator>
    </div>
  );
};

ExampleString.propTypes = {
  show: PropTypes.bool,
};

export default () => (
  <AnimationTemplate>
    <ExampleString />
  </AnimationTemplate>
);
