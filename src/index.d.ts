import * as React from 'react';
import { func } from 'prop-types';

declare namespace WixAnimations {
  type Direction = 'top' | 'bottom' | 'left' | 'right';
  type Sequence = 'default' | 'flip' | 'reverse' | 'reverse-flip';
  type Timing = 'micro' | 'small' | 'medium' | 'large' | 'slow01'
    | 'slow02' | 'medium01' | 'medium02' | 'fast01' | 'fast02';

  interface Delay {
    enter?: number;
    exit?: number;
  }

  interface Segment {
    direction?: Direction;
    size?: string;
  }

  interface Translate {
    enter?: Direction | Segment;
    exit?: Direction | Segment;
  }

  interface AnimatorProps {
    delay?: Delay;
    timing?: Timing;
    opacity?: boolean;
    scale?: boolean;
    translate?: Translate | boolean | string;
    height?: boolean | number | ((element) => number);
    width?: boolean | number | ((element) => number);
    sequence?: Sequence | boolean;
    show?: boolean;
    className?: string;
    debug?: boolean;
    dataHook?: string;
    childClassName?: string;
    children: React.ReactNode;
    skipMountTransition?: boolean;
    onEnter?: func;
    onEntering?: func;
    onEntered?: func;
    onExit?: func;
    onExiting?: func;
    onExitedAnimation?: func;
  }

  export class Animator extends React.Component<AnimatorProps> {}
}

export = WixAnimations;
