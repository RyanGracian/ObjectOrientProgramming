​
2
var array = [4,5,6,7,8];
3
var singleVal = 0;
4
​
5
// Only change code below this line.
6
​
7
singleVal = array.reduce(function(previousVal, currentVal) {
8
  return previousVal + currentVal;
9
}, 0);
10
​
