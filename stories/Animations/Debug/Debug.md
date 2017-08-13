## Debugging tool

Animations can be a beautiful thing to add to your application but one of the main problems of animations is that they are hard to debug.

This happens because you have no way to understand what is going on in 100-300ms when the magic occurs.

This is why you can add the `debug` prop to Animator. Using this prop you can mock the inline styles and classes of your animation for each animation phase.

Valid values for `debug` prop are:

`debug="enter" | debug="entering" | debug="entered" | debug="exit" | debug="exiting"`

For Example, this will mock the 'entering' phase: 

```html
<Animator debug="entering">
  <div> Your Content </div>
</Animator>
```

Please note the following:

1. `debug` will override the `show` prop and set it to `true`, but if you're not using the `show` prop, make sure your children are mounted in order to see them in debug mode.
2. `debug` only mocks the inline styles and css classes, it does not mimic in any way timeline / durations / delays of your animation
3. You might have noticed that 'exited' is missing from the debug options. Animator by definition does not have 'exited' phase because when it reaches the 'exited' phase the component will unmount.