Translate prop can take an `enter` segment and an `exit` segment.

Each Segment has a `direction` and a `size`.

A direction can be `top`, `bottom`, `left`, `right`.

Size can be anything that CSS can take, for example: `100%`, `10px`, `3vh`, `5em` and so on..

There are shorthand ways to write a translate object. All these 4 examples are doing the same thing:

`translate = {{enter: {direction: 'top', size: '100%'}, {exit: {direction: 'top', size: '100%'}}}};` - Full version

`translate = {{enter: 'top'}, {exit: 'top'}};` - The size will be automatically 100%

`translate = {{enter: 'top'}};` - Exit will have defaults of 'top' and '100%'

`translate` - direction will be 'top' by default