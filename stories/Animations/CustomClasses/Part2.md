Each one of this private `div`s has by default a class that sets `height` and `width` to `100%`.

### What if I want to style that div ?

You can do it with CSS, just be careful and keep this styling to the minimum. You can do it like this:

```css
.foo > div { /* foo class was added to the Animator parent */
  ... your styles goes here ...
}
```

Bare in mind that height and width is already set. you can override them (but only if you must!)

### What if I have multiple children and I want to style only one of them ?

You can add `animatorChildClassName` prop to your own React component.
 
(make sure it's not an HTML component such as `div` or `span` - otherwise you'll receive an error from React stating that this prop is not a valid prop).