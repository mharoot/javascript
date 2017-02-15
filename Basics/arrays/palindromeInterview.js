/**
 * That Silly Interview Question 1
 * Write a JavaScript function that reverses and returns a given string in one 
 * line of code
*/




// splits the given string into an array of characters, reverses
// the array, and then joins the character array back together into
// a string with no separator characters
function reverseString(str) {
   return str.split('').reverse().join('');
}

// executing the function and printing to the console
console.log(reverseString('abcd')); // prints dcba


/**
 * That Silly Interview Question 2
 * Write a JavaScript function that returns whether the given string is a 
 * palindrome in one line of code
 */

// checks whether the reversed string and the parameter string
// are fundamentally the same
function isPalindrome(str) {
   return str.split('').reverse().join('') === str;
}

// executing the function and printing to the console
console.log(isPalindrome('abcdcba')); // prints true