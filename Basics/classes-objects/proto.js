/******************************************************************************
 * Week 4.2 - JavaScript Classes and Objects (Prototypal)
 * Overview
 *                              What?
 * Prototypal inheritance in JavaScript is a way to create objects and add 
 * properties and methods using the prototype of an object. The prototype 
 * defines the base set of properties and methods available to an object of a 
 * given type.
 ******************************************************************************/



/******************************************************************************
                        Constructing a New Object
*******************************************************************************/
// define the "constructor" as a regular function
function Person(first, last) {
   this.firstName = first;
   this.lastName = last;
}

// instantiate a new Person object
let matt = new Person("Matthew", "Fritz");
console.log(matt.firstName); // prints Matthew
console.log(matt.lastName); // prints Fritz


/******************************************************************************
            Adding a Property to a Prototype (All Derived Objects)
*******************************************************************************/
Person.prototype.eyes = 2;



/******************************************************************************
            Adding a Method to a Prototype (All Derived Objects)
*******************************************************************************/
Person.prototype.getFullName = function() {
   return this.firstName + " " + this.lastName;
};
console.log(matt.getFullName()); // prints Matthew Fritz


