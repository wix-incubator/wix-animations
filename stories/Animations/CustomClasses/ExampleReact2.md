#### This is how you write the code in React:

```html
const MyComp = ({children}}) => (
  <div className="my-comp">{children}</div>
)

<Animator className="foo">
  <MyComp>Child 1</MyComp>
  <MyComp animatorChildClassName="bar">Child 2</MyComp>
</Animator>
```
