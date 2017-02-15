/******************************************************************************
 * What?
 * An array is like a list of elements. It is zero-indexed but it cannot be 
 * associative with textual keys.  If you want a data structure similar to an 
 * associative array (such as a dictionary), look into the Map object:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map 
 * (Links to an external site.)
 *******************************************************************************/



/*******************************************************************************
    Creating an Array
*******************************************************************************/
let arr = ["one", "two", "three"];



/*******************************************************************************
    Accessing Elements in an Array
*******************************************************************************/
let el = arr[0];
console.log(el); // prints one



/*******************************************************************************
    Assign Element to Array Index
*******************************************************************************/
arr[1] = "seven";
console.log(arr[1]); // prints seven



/*******************************************************************************
    Retrieve Length of an Array
*******************************************************************************/
let len = arr.length;
console.log(len); // prints 3



/*******************************************************************************
    Iterate Over an Array (for...of)
*******************************************************************************/
for(let el of arr) {
   console.log(el);
}
// prints one, seven, and three all on separate lines


/*******************************************************************************
    Useful Array Methods
    Iterate Over an Array (forEach)
*******************************************************************************/
arr.forEach(function(item, index, array) {
   console.log(item + " is at index " + index);
});
// prints the following lines:
// one is at index 0
// seven is at index 1
// three is at index 2



/*******************************************************************************
    Useful Array Methods
    Add Element to End of Array
*******************************************************************************/
arr.push("three");
console.log(arr[arr.length - 1]); // prints three


/*******************************************************************************
    Useful Array Methods
    Remove Element from End of Array
*******************************************************************************/
let item = arr.pop();
console.log(item); // prints three



/*******************************************************************************
    Useful Array Methods
    Add Element to Beginning of Array
*******************************************************************************/
arr.unshift("one");
console.log(arr[0]); // prints one



/*******************************************************************************
    Useful Array Methods
    Add Element to Beginning of Array
*******************************************************************************/
arr.unshift("one");
console.log(arr[0]); // prints one


/*******************************************************************************
    Useful Array Methods
    Remove Element from Beginning of Array
*******************************************************************************/
let ar = ["one", "two", "three"];
let e = ar.shift();
console.log(e); // prints one



/*******************************************************************************
    Useful Array Methods
    Retrieve Index of an Element
*******************************************************************************/
ar = ["one", "two", "three"];
let index = ar.indexOf("two");
console.log(index); // prints 1



/*******************************************************************************
    Useful Array Methods
    Remove an Element by Index
*******************************************************************************/
el = ar.splice(0, 1); // index, deletion count
console.log(el); // prints one
console.log(ar); // prints ["two", "three"]


/*******************************************************************************
    Useful Array Methods
    Duplicate an Array
*******************************************************************************/
ar = ["one", "two", "three"];
let arr2 = ar.slice(); // duplicates the array
console.log(arr2); // prints ["one", "two", "three"]



/*******************************************************************************
    Useful Array Methods
    Execute Function on all Elements in Array
*******************************************************************************/
let numbers = [2, 4, 6];
let newNumbers = numbers.map(function(el, index, array) {
   return el * 2;
});
console.log(newNumbers); // prints [4, 8, 12]

let squares = [9, 16, 25];
let rooted = squares.map(Math.sqrt); // run Math.sqrt on all elements
console.log(rooted); // prints [3, 4, 5]


/*******************************************************************************
    Useful Array Methods
    Filter Array Elements by Truth Test
*******************************************************************************/
numbers = [4, 7, 3, 5];
let filtered = numbers.filter(function(el, index, array) {
   return (el > 4);
});
console.log(filtered); // prints [7, 5]



/*******************************************************************************
    Useful Array Methods
    Sort Array Elements with Callback Function
*******************************************************************************/

ar = [5, 7, 3, 6, 9];
ar.sort(function(a, b) {
   return (a - b); // sort ascending order
});
console.log(ar); // prints [3, 5, 6, 7, 9]

// if the callback function returns < 0, a is sorted before b
// if the callback function returns 0, a and b have their positions unchanged
// if the callback function returns > 0, a is sorted after b


/*******************************************************************************
    Useful Array Methods
    Random Array Sort (Shuffle)
*******************************************************************************/
ar = [3, 4, 5, 6, 7];
arr.sort(function(a, b) {
   return (0.5 - Math.random()); // randomized return value
});
console.log(arr); // prints the randomly-ordered array