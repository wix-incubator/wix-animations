import React from 'react';
import {Button} from 'wix-style-react/Backoffice';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


const ExampleTranslateDirection = ({show}) => {

  const directions = ['right','top', 'bottom','left'];

  return (
    <div className={css.basicWrapper}>
      {directions.map((direction, index) =>
        (<Animator show={show} key={index} opacity translate={direction}>
          <div className={css.basicDiv}>direction: {direction}</div>
        </Animator>)
      )}
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <ExampleTranslateDirection/>
  </AnimationTemplate>

