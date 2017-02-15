/******************************************************************************
 * Week 4.3 - JavaScript Classes and Objects (Class Syntax)
 *                             Overview
 * The class syntax introduced in ES6 is syntactic sugar for prototypal 
 * inheritance. It was introduced to match other languages closely in their 
 * design of object-oriented functionality.  Unlike function declarations, class
 * declarations do not benefit from hoisting; a class has to be defined before it 
 * can be instantiated as an object (otherwise you will get a ReferenceError 
 * exception).
 ********************************************************************************/



/******************************************************************************
                            Defining a Class
********************************************************************************/
class MyClass {
}



/******************************************************************************
                            Instantiating the Object
********************************************************************************/
let instance = new MyClass();



/******************************************************************************
                            Class Details
                            Constructor
********************************************************************************/
class Person1 {
   constructor(first, last) {
      this.firstName = first; // creates firstName property
      this.lastName = last; // creates lastName property
   }
}

matt = new Person1("Matthew", "Fritz");



/******************************************************************************
                            Class Details
                            Accessing Properties
********************************************************************************/
console.log(matt.firstName); // prints Matthew



/******************************************************************************
                            Class Details
                        Defining Methods (Regular Method)
********************************************************************************/

//New Person2 class:

class Person2 {
   constructor(first, last) {
      this.firstName = first; // creates firstName property
      this.lastName = last; // creates lastName property
   }
   displayName() {
      // regular method
      console.log(this.firstName + " " + this.lastName);
   }
}

let nerces = new Person2("Nerces", "Kazandjian");
nerces.displayName(); // console prints Nerces Kazandjian



/******************************************************************************
                            Class Details
                        Defining Methods (Getters)
********************************************************************************/

// New Person3 class:

class Person3 {
   constructor(first, last) {
      this.firstName = first; // creates firstName property
      this.lastName = last; // creates lastName property
   }
   displayName() {
      // regular method
      console.log(this.firstName + " " + this.lastName);
   }
   get lowerFirst() {
      // getter method but retrieved as a property
      return this.firstName.toLowerCase();
   }
}

let steve = new Person3("Steven", "Fitzgerald");
console.log(steve.lowerFirst); // retrieved like a property
// prints steve




/******************************************************************************
                            Class Details
                        Defining Methods (Statics)
********************************************************************************/
//New Person4 class:

class Person4 {
   constructor(first, last) {
      this.firstName = first; // creates firstName property
      this.lastName = last; // creates lastName property
   }
   displayName() {
      // regular method
      console.log(this.firstName + " " + this.lastName);
   }
   get lowerFirst() {
      // getter method but retrieved as a property
      return this.firstName.toLowerCase();
   }
   static displayType() {
      // static method exists at class level, not object level
      console.log("Person");
   }
}

let alex = new Person4("Alex", "Hernandez");
Person4.displayType(); // prints Person to the console regardless of instantiated object


/******************************************************************************
                            Class Details
                        Class Constants (Kinda)
********************************************************************************/

class Person5 {
   constructor(first, last) {
      this.firstName = first; // creates firstName property
      this.lastName = last; // creates lastName property
   }
   displayName() {
      // regular method
      console.log(this.firstName + " " + this.lastName);
   }
   get lowerFirst() {
      // getter method but retrieved as a property
      return this.firstName.toLowerCase();
   }
   static displayType() {
      // static method exists at class level, not object level
      console.log("Person");
   }
   static get CONST_VALUE() {
      // the idea of "class constants" can be achieved with both the static
      // and get keywords to create a static property at the class level
      return "Constant value";
   }
}

let yazmin = new Person5("Yazmin", "Peebles");
console.log(Person5.CONST_VALUE); // prints Constant value



/******************************************************************************
                            Class Details
                            Inheritance

Only single-inheritance is supported in JavaScript and the typical inheritance 
rules would apply.

                    Subclassing with Extends Keyword
********************************************************************************/
class Human1 {}
class Person6 extends Human1 {}



/******************************************************************************
                    Invoking the Super-Constructor
*******************************************************************************/

class Human2 {
   constructor() {}
}

class Person7 extends Human2 {
   constructor(first, last) {
      super(); // call super-constructor first
      this.firstName = first;
      this.lastName = last;
   }
}



/******************************************************************************
                    Overriding Methods from Parent Class
*******************************************************************************/
class Human3 {
   constructor() {}
   walk() {
      console.log("A human is walking");
   }
}

class Person8 extends Human3 {
   constructor(first, last) {
      super(); // call super-constructor first
      this.firstName = first;
      this.lastName = last;
   }
   walk() {
      console.log(this.firstName + " is walking");
   }
}

matt = new Person8("Matthew", "Fritz");
matt.walk(); // prints Matthew is walking




/******************************************************************************
                    Call Methods from Parent Class
*******************************************************************************/
class Human {
   constructor() {}
   walk() {
      console.log("A human is walking");
   }
}

class Person extends Human {
   constructor(first, last) {
      super(); // call super-constructor first
      this.firstName = first;
      this.lastName = last;
   }
   walk() {
      super.walk(); // call parent's walk() first
      console.log(this.firstName + " is walking");
   }
}

let matt = new Person("Matthew", "Fritz");
matt.walk();
// prints the following lines:
// A human is walking
// Matthew is walking