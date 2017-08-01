import React from 'react';
import ShowHideControls from './ShowHideControls';

const AnimationTemplate = ({children, interval = false}) => {

  return (
    <div>
      <ShowHideControls interval={interval}>
        {children}
      </ShowHideControls>
    </div>
  )
};


export default AnimationTemplate;