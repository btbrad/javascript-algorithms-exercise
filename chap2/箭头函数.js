var circleAreaES5 = function circleArea(r) {
  var PI = 3.14
  var area = PI*r*r 
  return area
}

console.log(circleAreaES5(3))

const circleAreaES6 = (r) => {
  const PI = 3.14
  const area = PI*r*r 
  return area
}

console.log(circleAreaES6(3))

const circleArea2 = r => 3.14*r*r

console.log(circleArea2(3))