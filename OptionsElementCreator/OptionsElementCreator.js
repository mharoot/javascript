/*
Module name: OptionsElementCreator.js
Purpose:  Appending Option Element to a given Select Element by it's ID.
*/

function OptionsElementCreator(selectElementID, optionText) {
  this.selectElement     = document.getElementById(selectElementID);
  this.option            = document.createElement("option");
  this.text              = document.createTextNode(optionText);
  this.option.appendChild(this.text);
   
  this.insertLast = function () {                    // append option to the end
    this.validate();
    this.selectElement.appendChild(option);
  }
  
  this.insertFirst = function () {                   // append option to  start
    this.validate();
    this.selectElement.insertBefore(this.option, this.selectElement.childNodes[0]); 
  }
  
  this.insertBefore = function ( specifiedOption ) { // append option before a specified option by name.
    this.validate();
    for(var i = 0; i < this.selectElement.length; i++) {
        if(this.selectElement.childNodes[i] === specifiedOption) {
          this.selectElement.insertBefore(this.option, this.selectElement.childNodes[i]);
          return 0;
        }
    }
    
    this.insertLast(); // if not found append as usual.
  }
  
  this.validate = function () {                     // check to see if an option text is provided.
    if(this.optionText ==='')
    {
      console.log("optionText null");
      return false;
    } 
  }
  

}
