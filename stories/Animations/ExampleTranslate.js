import React from 'react';
import {Button} from 'wix-style-react/Backoffice';
import Animator from '../../src/components/Animator';
import * as css from './Example.scss';
import AnimationTemplate from './AnimationTemplate';


const ExampleTranslate = ({show}) => {
  return (
    <div>
      <div className={css.basicWrapper}>
        <Animator show={show} opacity translate>
          <div className={css.basicDiv}>translate</div>
        </Animator>
        <Animator show={show} opacity translate="bottom">
          <div className={css.basicDiv}>translate="bottom"</div>
        </Animator>
        <Animator show={show} opacity translate={{enter: 'left', exit: 'right'}}>
          <div className={css.basicDiv}>{`translate={{enter: 'left', exit: 'right'}}`}</div>
        </Animator>
        <Animator show={show} opacity translate={{enter:{direction: 'right', size: '100%'}}}>
          <div className={css.basicDiv}>{`translate={{enter:{direction: 'right', size: '100%'}}}`}</div>
        </Animator>
        <Animator show={show} opacity translate={{exit:{direction: 'left', size: '10vh'}}}>
          <div className={css.basicDiv}>{`translate={{exit:{direction: 'left', size: '10vh'}}}`}</div>
        </Animator>
        <Animator show={show} opacity translate={{enter:{direction: 'right', size: '100px'}, exit:{direction: 'left', size: '100px'}}}>
          <div className={css.basicDiv}>{`translate={{enter:{direction: 'right', size: '100px'}, exit:{direction: 'left', size: '100px'}}}`}</div>
        </Animator>
      </div>
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <ExampleTranslate/>
  </AnimationTemplate>

