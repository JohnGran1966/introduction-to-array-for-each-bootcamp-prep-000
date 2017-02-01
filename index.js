
// var array = [1, 2, 3];
function changeCompletely(element, index, array){
    // array.forEach

    array[index] = element;
}
// changeCompletely('hello', 0, ['world', '!'])
// ['hello', '!']

// var array = [1, 2, 3];
function  doToElementsInArray(array, callback){
  array.forEach(callback)
}
