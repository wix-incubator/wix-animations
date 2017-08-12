## Debugging tool

Animations is a beautiful thing but once your layout is broken for 200ms and you don't have any clue what went wrong - that can be very frustrating.

This is why you can add the `debug` prop to Animator. Using this prop you can mock the inline styles and classes of your animation for each animation phase.

Valid values for these props are:

`debug="enter" | debug="entering" | debug="entered" | debug="exit" | debug="exiting"`

For Example: 

```html
<Animator debug="entering">
  <div> Your Content </div>
</Animator>
```

Please note the following:

1. `debug` will override the `show` prop and set it to `true`, but if you're not using the `show` prop, make sure your children are mounted in order to see them in debug mode.
2. `debug` only mocks the inline styles and css classes, it does not mimic in any way timeline / durations / delays of your animation