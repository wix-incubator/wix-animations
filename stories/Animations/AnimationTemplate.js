import React from 'react';
import ShowHideControls from './ShowHideControls';

const AnimationTemplate = ({children, interval = false}) => {

  return (
    <ShowHideControls interval={interval}>
      {children}
    </ShowHideControls>
  )
};


export default AnimationTemplate;