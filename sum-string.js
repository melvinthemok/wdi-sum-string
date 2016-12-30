function sumFunc (numString) {
  numString = numString.split('')
  var sum = 0
  for (var i = 0; i < numString.length; i++) {
    sum += parseInt(numString[i], 10)
  }
  return sum
}
//
// console.log(sumFunc('1234'))
function sumNeg (numString) {
  numString = numString.split('')
  var sum = 0
  var minus = []
  var minusSum = 0
  for (var i = 0; i < numString.length; i++) {
    if (numString[i] === '-') {
      minus.push(numString[i + 1])
      numString.splice(numString[i], 1)
    } else {
      sum += parseInt(numString[i], 10)
    }
  }
  for (var j = 0; j < minus.length; j++) {
    minusSum += parseInt(minus[j], 10)
  }
  sum = sum - minusSum
  return sum
}
//
// console.log(sumNeg('12-23'))
