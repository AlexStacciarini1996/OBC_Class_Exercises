// On each click on the "new phone button", this function will add a new input line for registering a phone
function AddNewPhone() {
const phoneForm = document.querySelector("form#phones") // the querySelector will return the first element on the search made based on the parameter 
const newPhone = phoneForm.children[0].cloneNode(true) /*this line will clone the first children, the cloneNode receives the parameter "deep", that, if true, will return all children
and children of the children, if falsem will return only the first children */
const phonePosition = phoneForm.children.length + 1 //phonePosition will have the value of the size of the phone list. This will increase the number after the word phone.
newPhone.querySelector("label").innerText = "Phone " + phonePosition + ": " //this line will add the text to the new label
phoneForm.appendChild(newPhone) //this will add the new phone as a child object
console.log(phoneForm.children)
}

function PrintPhones() {
let message = ""
const phones = document.querySelectorAll("input[name='phone']") //this line will create an array listing all the phones we created
phones.forEach((phone, index) => {
    message += "Phone " + (index + 1) + ": " + phone.value + "\n" // this arrow function will go through all the elements on the phones array and print each one of them
})
alert(message)
}