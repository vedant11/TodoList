//variables to cache selectors
var button=document.getElementById("addButton");
var input=document.getElementById("userInput");
var ul= document.querySelector("ul");
var deleteButtons=document.getElementsByClassName("deleteButtons")

//Functions

function getInputLength()
{
    return input.value.length;
}                               


function removeParent(event)                                                //Copied form SO && called by addDeleteButton
{
    event.target.removeEventListener("click",removeParent,false);
    event.target.parentNode.remove();
}


function addDeleteButton(li)                                                 //Called along with list element appending
{
    var newButton=document.createElement("button");
    newButton.appendChild(document.createTextNode("delete"));
    li.appendChild(newButton);
    newButton.setAttribute("class","deleteButtons");
    newButton.onclick=removeParent;
}



function getEventTarget(e)                                                  //called by strikethrough function mentioned below (anonymous); 
{                                                                           //returns event which, in some cases is referened by different names
	e = e || window.event;
	return e.target || e.srcElement;
}


ul.onclick = function(event)                                                //click on a list item and it strikethroughs the text
{
	var target = getEventTarget(event);
	target.classList.toggle("done");                                        //adds a class "done"
}


function addListAfterEnter(event) 
{
    if (getInputLength() > 0 && event.keyCode === 13)                       //&& we want this to run only when enter is pressed
    CreateAndAppendNewliTextNode();
}


function addListAfterClick()
 {
    if (getInputLength() > 0)                                               //we dont want empty strings added to our list
    CreateAndAppendNewliTextNode();
}


function CreateAndAppendNewliTextNode()                    
{   
    var li = document.createElement("li");                                  // new list element is made in the document and referenced by this variable(li)
    li.appendChild(document.createTextNode((input.value +"   ")));          //new text node is created and also appended to the li element in a step
    ul.appendChild(li);                                                     // the li element set is now finally appended to the parent  element (ul)
    input.value = "";                                                       //sets the input value back to empty string in order to avoid extra makings of list
    addDeleteButton(li);                                                    //function call for adding delete button                   
}


//EventListeners
                                                                       
button.addEventListener("click",addListAfterClick);                         //function passed by reference ;event listener for click


input.addEventListener("keypress",addListAfterEnter);                       //function passed by reference; event listener for enter press 
