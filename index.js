module.exports = arrayInterlace

function arrayInterlace(array) {
  var midpoint = Math.ceil(array.length / 2)
    , firstHalf = array.slice(0, midpoint)
    , secondHalf = array.slice(midpoint)
    , newArray = []

  array.map(function (item, i) {
    if (firstHalf[i]) newArray.push(firstHalf[i])
    if (secondHalf[i]) newArray.push(secondHalf[i])
  })

  return newArray

}
