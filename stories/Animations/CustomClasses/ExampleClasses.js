import React from 'react';
import Animator from '../../../src/components/Animator';
import * as css from '../Example.scss';
import AnimationTemplate from '../AnimationTemplate';
import StyledDiv from '../StyledDiv';
import OrangeDiv from '../OrangeDiv';

//  This is how The CSS looks like
//
// .flex-parent {
//   display: flex;
// }
//
// .flex-parent > div {
//   flex-grow: 1;
//   width: auto; /* overriding width: 100%; */
// }
//
// .flex-parent .flex-child-grow-2 {
//   flex-grow: 2;
// }

const ExampleClasses = ({show}) => {
  return (
    <Animator height className={css.flexParent} show={show}>
      <StyledDiv>My parent set me flex-grow: 1</StyledDiv>
      <OrangeDiv animatorChildClassName={css.flexChildGrow2}>I have <code>animatorChildClassName={`{`}css.flexChildGrow2{`}`}</code> so I am much bigger</OrangeDiv>
    </Animator>
  )
};

export default () =>
  <AnimationTemplate>
    <ExampleClasses/>
  </AnimationTemplate>

