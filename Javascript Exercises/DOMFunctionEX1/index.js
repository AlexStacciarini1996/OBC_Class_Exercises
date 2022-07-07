//In this exercise, we will make the inputs call the functions,
//and the functions will know exactly the element that called them. However, we will do it on different ways for each function

function SayMyFirstName(element) { // the element is a parameter that will be the first input element on the html (the one that calls this function)
alert("My first name is " + element.value) //element.value is whatever is written on the text input
}

function SayMyLastName() {
console.log(window.event) /*window.event is a global variable that stores whatever last happened on the page.
Event has many properties, and one of the most interesting is "target", which stores the element where the event was called. Ex:*/
alert("My last name is: " + window.event.target.value)/* window.event.target.value will get the value of the input that called the event.
When we change the value and call the function, that is the last event, so it will get the value of the "last name" typed */
}