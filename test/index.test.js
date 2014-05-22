var arrayInterlace = require('../')
  , assert = require('assert')

describe('array-interlace', function () {

  it('should interlace an array', function () {

    assert.deepEqual(arrayInterlace([ 1, 2 ]), [ 1, 2 ])
    assert.deepEqual(arrayInterlace([ 1, 2, 3 ]), [ 1, 3, 2 ])
    assert.deepEqual(arrayInterlace([ 1, 2, 3, 4, 5, 6 ]), [ 1, 4, 2, 5, 3, 6 ])

  })

})
