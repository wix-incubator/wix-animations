# Wix Animations

[![Build Status](https://travis-ci.org/wix/wix-animations.svg?branch=master)](https://travis-ci.org/wix/wix-animations)

Wix Animations contains the `Animator` React Component. 

This component will animate any child it has that will mount or unmount.

The `Animator` component uses [react-transition-group](https://github.com/reactjs/react-transition-group) library. It is compliant with Wix UX style guidelines for animations. 

## Demo
Watch the [Storybook Docs & Demos](https://wix-wix-animations.surge.sh) to see everything you can do with it.

## Getting Started
### Using in a Project
#### Install the npm
```javascript
    npm install --save wix-animations
```

#### Using Animator component inside JSX file
```javascript
    import React from 'react'; // Required to create a React Component
    import {Animator} from 'wix-animations';

    const YourComponent = ({show}) => (
      <Animator show={show} opacity scale>
        <div>I will show and hide with opacity and scale!</div>
      </Animator>
    )
```

### Using Storybook
Storybook will allow you to see all the different components implemented, and the different usages of each one of them.
```javascript
    npm install
    npm start
```

in your browser: `http://localhost:6006`