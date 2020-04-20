| propName | propType | defaultValue | Valid Values | description |
|----------|----------|--------------|-------------|-----|
| timing | string | large | micro, small, medium, large | Sets the duration |
| opacity | boolean | false | - | Sets Opacity |
| scale | boolean | false | - | Sets Scale |
| translate | translate Object or boolean or string | false | -| Sets translate. examples: translate / translate="left" / or translate={translateObject} (see below) |
| height | boolean or number | false | - | Sets the height. if set to 'true' then Animator will calculate the height on the go. if sets to a number Animator will set the height in pixels with this number. It is more recommended to set a fixed number if you know it|
| width | boolean or number | false | - | Sets the width. if set to 'true' then Animator will calculate the width on the go. if sets to a number Animator will set the width in pixels with this number. It is more recommended to set a fixed number if you know it|
| sequence | string | false | default, flip, reverse, reverse-flip | Set a delay between appearance of children. See Sequence table for more details|
| show | boolean | - | true, false | You can use this prop if you want to put inside the Animator static elements but still want to mount/unmount them with animation using this boolean |
| className | string | false | - | The class will be added as a **direct parent class** for all the children it will have|
| debug | string | false | enter, entering, exit, exiting | Emulates the real animation classes and styles without the need to animate. Just exit your element visible and add to debug different stages. enter: 'enter', entering: 'enter enter-active', exit: 'exit', exiting: 'exit exit-active' |
| dataHook | string | - | - | will convert to data-hook |

# Props of Children of Animator Component

| propName | propType | defaultValue | Valid Values | description |
|----------|----------|--------------|-------------|-----|
| animatorChildClassName | string | false | - | Designed to override childClassName if necessary |


# Translate Object

| propName | propType | defaultValue | Valid Values | description |
|----------|----------|--------------|-------------|-----|
| enter | string or Segment Object | {direction: 'top', size: '100%'} | top, bottom, left, right | Examples: 'top' or Segment Object (see below) |
| exit | string or Segment Object | {direction: 'top', size: '100%'} | Examples: 'top' or Segment Object (see below)| Sets the size of the translation |

# Segment Object

| propName | propType | defaultValue | Valid Values | description |
|----------|----------|--------------|-------------|-----|
| direction | string | top | top, left, right, bottom | Sets the direction **TO** the translation |
| size | string | 100% | - |  any value that translate can take: px, %, em and such. a number param will be converted to %  **DISAPPEAR** |


# Sequence Table

| propName | Which Child Appears First | Which Child disappears first |
|----------|---------------------------|-------------------|
| default | First Child | First Child |
| flip | First Child | Last Child |
| reverse | Last Child | Last Child |
| reverse-flip | Last Child | First Child |
