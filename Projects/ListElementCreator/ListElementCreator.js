/*
Module name: ListElementCreator.js
Purpose:  Appending li Element to a given ul Element by it's ID.
*/

function ListElementCreator(ulElementID, liText) {
  this.ulElement         = document.getElementById(ulElementID);
  this.li                = document.createElement("li");
  this.text              = document.createTextNode(liText);
  this.li.appendChild(this.text);
   
  this.insertLast = function () {                    // append li to the end
    this.validate();
    this.ulElement.appendChild(this.li);
  }
  
  this.insertFirst = function () {                   // append li to  start
    this.validate();
    this.ulElement.insertBefore(this.li, this.ulElement.childNodes[0]); 
  }
  
  this.insertBefore = function ( specified_li ) { // append li before a specified li by name.
    this.validate();
    for(var i = 0; i < this.ulElement.length; i++) {
        if(this.ulElement.childNodes[i] === specified_li) {
          this.ulElement.insertBefore(this.li, this.ulElement.childNodes[i]);
          return 0;
        }
    }
    
    this.insertLast(); // if not found append as usual.
  }
  
  this.validate = function () {                     // check to see if an li text is provided.
    if(this.liText ==='')
    {
      console.log("liText null");
      return false;
    } 
  }
  

}