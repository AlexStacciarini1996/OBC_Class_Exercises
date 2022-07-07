function Save() {
//The variable "Event" is filled with the last event that was called
//This line will prevent the page from being reloaded by the form submit,
//because it will prevent the default behavior of the event called 
Event.preventDefault()
//This line will get the value of the element of type "input" with the name "name"
let name = document.querySelector("input [name = 'name']").value
//This line will get the value of the element "select" with the name "proglang".
 //Since the value IS the option checked, I don't need to put "option:checked" in the code
let progLang = document.querySelector("select[name = 'proglang']").value
alert("Name: " + name + "\nProgramming Language: " + progLang)
}