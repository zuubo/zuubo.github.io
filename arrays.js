function printReverse(array) {
  for (var i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

function isUniform(array) {
  var num = array[0];
  var counter = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === num) {
      counter ++;
    }
  }
  if (counter === array.length) {
    return true;
  }
  else {
    return false;
  }
}

// the better way to approach isUniform, much less code lol
// function isUniform(arr) {
//   var first = arr[0];
//   for (var i = 1; i < arr.length; i++) {
//     if (arr[i] !== first) {
//       return false;
//     }
//   }
//   return true;
// }

function sumArray(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum += Number(array[i]);
  }
  return sum;
}

// this solution uses forEach
// function sumArray(arr) {
//   var total = 0;
//   arr.forEach(function(element){
//     total += element;
//   });
//   return total;
// }

function max(array) {
  var max = array[0];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }
  return max;
}

// ***building the forEach function***
function myForEach(arr, func) {
  //loop through array
  for (var i = 0; i < arr.length; i++){
    //call func
    func(arr[i]);
  }

}

// some arrays for testing functions
var testColors = ["red", "yellow", "blue"];
var testNum = [1,2,3,4];