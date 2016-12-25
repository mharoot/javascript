/*
Module name: OptionsElementCreator.js
Purpose:  Appending Option Element to a given Select Element by it's id.
*/

function OptionElementCreator(parentID,optionName) 
{
    /*  field variables                     */
    this.optionName = optionName;
    this.parentID   = parentID;


    /*  this method creates an option element child and appends it to the end of its parent  */
    this.createOptionElement = function createAnOption() 
    {
              
      if(this.optionName ==='')
      {
        alert("You have not submitted a tag name...");
        return false;
      }
      
      var option = document.createElement("option");
      var node = document.createTextNode(this.optionName);
      option.appendChild(node);
      var element = document.getElementById(parentID);
      element.appendChild(option);
        
    }


}
