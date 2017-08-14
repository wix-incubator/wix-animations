#### JSX:

```html
const Bar = ({children}}) => (
  <div className="bar">{children}</div>
)

<Animator className="foo">
  <Bar>Child 1</Bar>
  <Bar animatorChildClassName="bar-wrapper">Child 2</Bar>
</Animator>
```
