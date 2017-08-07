import React from 'react';
import Animator from '../../../src/components/Animator';
import AnimationTemplate from '../AnimationTemplate';

const HeightExample = ({show}) => {
  return (
    <div>
      <div style={{height: 'auto', border: '1px solid black', padding: '10px 20px 20px'}}>
        <Animator show={show} height>
          <div style={{fontSize: '20px', background: 'beige', padding: '20px'}}>I have height={'{'}true{'}'} so animator
            guess the right height for me. use me *only* if you don't know the height
          </div>
        </Animator>
        <div>I am some casual text here</div>
      </div>
      <div style={{height: 'auto', border: '1px solid black', padding: '10px 20px 20px'}}>
        <Animator show={show} height={150}>
          <div style={{fontSize: '20px', background: 'beige', padding: '20px', height: '150px'}}>I have height={`{150}`}
            so animator animates to that specific height. This method is much more stable than the other!!
          </div>
        </Animator>
        <div>I am some casual text here</div>
      </div>
      <div style={{height: 'auto', border: '1px solid black', padding: '10px 20px 20px'}}>
        <Animator height={110}>
          {show &&
          <div style={{fontSize: '20px', background: 'beige', padding: '20px', height: '110px'}}>You can easily combine
            mount/unmount elements</div>}
          {!show &&
          <div style={{fontSize: '20px', background: 'purple', padding: '20px', color: 'white', height: '110px'}}>I AM
            ANOTHER ELEMENT!!!!</div>}            </Animator>
        <div>I am some casual text here</div>
      </div>
    </div>
  )
};

export default () =>
  <AnimationTemplate>
    <HeightExample/>
  </AnimationTemplate>

