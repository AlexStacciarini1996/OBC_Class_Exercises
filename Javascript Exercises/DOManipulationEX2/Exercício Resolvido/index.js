function AddHouse()
{//this will assign the values in the input fields to the variables created
let area = document.querySelector("input[name='area']").value
let number = document.querySelector("input[name='residenceNumber']").value
let nbh = document.querySelector("input[name='neighbour']").value
let city = document.querySelector("input[name='city']").value
//this will create the list entry and will set the text of the li element to the one I gave
let newValue = document.createElement("li")
newValue.innerText = ("Residence Number: " + number + "Neighbourhood: " + nbh + "City: " + city + "Area: " + area)
//this will create the remove button, set its type, inner text and attribute
let removeButton = document.createElement("button")
removeButton.type = "button"
removeButton.innerText = "Remover"
removeButton.setAttribute("onclick", "RemoveHouse(this)") //This is similiar to create a button in HTML, assign a function to the onclick property and use the parameter "this"
//this will append the remove button as a child to the li element
newValue.appendChild(removeButton)
//this will append the li element as a child of the ol houselist
document.getElementById("houselist").appendChild(newValue)
}
function RemoveHouse(button){
let liToRemove = button.parentNode //the parent node of the remove button is the li element, this will get that value
document.getElementById("houselist").removeChild(liToRemove) // this will remove the entire li element, which is a child of the houselist
}
/*
Note about the "type = button"
In the HTML document, the type has to be specified as "button", or else, at least in Chrome, clicking the button will submit data and refresh the page
If I specify it as a "button", instead of the default type, which I think is the "submit" type, it will not refresh the page
*/
