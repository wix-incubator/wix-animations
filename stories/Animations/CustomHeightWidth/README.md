You can use height/width prop by passing `height`/`height={true}` 
for automatic height calculations.

You can pass a number to set a fixed height `height={100}` (in this example 100px).

Animator is making its own calculation to determine the height of the element
but it might not be accurate 

or it might not fit your needs (since there are many
parameters that affects the height and animator can't predict all of them).

Therefore you can calculate your own height by passing a function.

The function receives the element as a parameter and returns the height as a number

if the function will not return a number it will throw an error!

For Example:

```html
const calculateHeight = (element) => {
 if (element.hasClass('minified') {
   return 15;
 } else {
   return element.offsetHeight + parseInt(element.style.paddingTop, 10) + 5;
 }
}

<Animator height={calculateHeight}>
  <div style={{paddingTop: '10px'}>Your Element</div>
</Animator>

```