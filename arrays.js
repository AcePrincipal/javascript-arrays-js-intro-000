var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, e){
  arr.unshift(e);
}
function destructivelyAddElementToBeginningOfArray(arr, e) {
  arr[0] = e;
  return arr;
}
