var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(arr, e){
  arr1 = [e, ...arr];
  return arr1;
}
function destructivelyAddElementToBeginningOfArray(arr, e) {
  arr.unshift(e);
  return arr;
}
function addElementToEndOfArray(arr, e){
  arr1 = [e, ...arr];
  return arr1;
}
function destructivelyAddElementToEndOfArray(arr, e) {
  arr.unshift(e);
  return arr;
}
