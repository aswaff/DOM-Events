var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var checkmark = document.getElementsByClassName("checkmark");
var xmark = document.getElementsByClassName("xmark");
var selector = document.getElementsByClassName("selector");



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var checkmark = document.createElement("div");
	var xmark = document.createElement("div");

	li.appendChild(document.createTextNode(input.value));
	li.classList.add("selector");
	// Grabs text from input box, and creates element "li"
	ul.appendChild(li);
	// Adds the new "li" to the "ul" list
	li.appendChild(checkmark);
	// Adds a div class to the new "li"
	checkmark.classList.add("checkmark");
	// Adds a checkmark class to the new div
	li.appendChild(xmark);
	// Adds a 2nd div
	xmark.classList.add("xmark");
	// Adds a xmark class to the 2nd div
	input.value = "";
}


function getEventTarget(e){
	e = e || window.event; //IE support; will assign window.event as e
	return e.target || e.srcElement; //will give the target of the event called, IE support for e.srcElement
}


function checkMarkLoop(){
	for (var i = 0; i < checkmark.length; i++) {
		checkmark[i].onclick = function(event){
			var target = getEventTarget(event);
				target.parentElement.classList.toggle("done");
		}
	}
}
// Loop to select all the checkmarks in the divs.  Then calling the parent element, and toggling the class.

function xMarkLoop() {
	for (var i = 0; i < xmark.length; i++) {
		xmark[i].onclick = function(event){
			var target = getEventTarget(event);
				target.parentElement.remove();
		}
	}
}
// Loop to select all the xmarks in the divs.  Then calling the parent element, and deleting the element.


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
		checkMarkLoop();
		xMarkLoop();
		// Calling loop functions again, so that new list items can be checked, and deleted.
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

checkMarkLoop();
xMarkLoop();
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);