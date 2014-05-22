# array-interlace

Interlace the contents of an array

[![build status](https://secure.travis-ci.org/domharrington/array-interlace.png)](http://travis-ci.org/domharrington/array-interlace)

Takes an array, splits it in half, then takes it in turns to push an item from each split array back onto a new array

## Installation

```
npm install array-interlace --save
```

## Usage
```js
var arrayInterlace = require('array-interlace')

console.log(arrayInterlace([ 1, 2, 3, 4, 5, 6 ]))
// Array is [ 1, 4, 2, 5, 3, 6 ]
```

### `var interlacedArray = arrayInterlace(array)`

Options must include:

- `array` - an array to interlace

## Credits
[Dom Harrington](https://github.com/domharrington/)
