import React from 'react';
import {Button} from 'wix-style-react/Backoffice';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


const ExampleTranslateSize = ({show}) => {

  const sizes = ['0%', '10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%', ];

  return (
    <div className={css.basicWrapper} style={{height: '70px', border: '1px solid black'}}>
      {sizes.map((size, index) =>
        (<Animator show={show} key={index} opacity translate={{enter: {direction: 'top', size}, exit: {direction: 'top', size}}}>
            <div className={css.basicDiv}>{size}</div>
        </Animator>)
      )}
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <ExampleTranslateSize/>
  </AnimationTemplate>
