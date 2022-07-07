//This function will change the text background to blue when called
function SetBlueBg() {
    //Get the element using its id
    let element = document.getElementById("style-text")
    //Setting the color to blue 
    //(accessing the backgroundColor property, of the style, of the element)
    element.style.backgroundColor = "blue"
}
function SetNormalBg() {
    //This line is a more direct approach to what we did in the above function
    document.getElementById("style-text").style.backgroundColor = "transparent"
}
function SetRedFont() {
    let element = document.getElementById("style-text")
    //To set the color to red, we have to add a class, the class being the
    //p.red-color in the html document. We will use the property "classList", that has
    //the methods "add" and "remove". We will use the "add" to add the color
    element.classList.add("red-color")
    //The above line is adding the red-color class to the element (the p element)
    //Since the red-color literally gives the red color style, the font will change to red
}
function SetNormalFont() {
    //This line will remove the red-color class from the element
    document.getElementById("style-text").classList.remove("red-color")
}