function ShowInfo() {
    //This will get the value of the element of "input" type with the name "name"
    let name = document.querySelector("input[name = 'name']").value
    //This line will get the TEXT(what's inside the tag) value of the element of "select" type, name "color" and the option checked
    let color = document.querySelector("select[name = 'color'] option:checked").text
    //This will get the checked value of the element of "input" type, name "likeprog".
    //Since this input is a radio button, it has a value to be checked
    let likeProg = document.querySelector("input[name = 'likeprog']:checked").value
    //This will get ALL the values of the ckecked elements in an array format
    let devOptions = document.querySelectorAll("input[name = 'dev-options']:checked")
    //Create array to store all the values from devOptions
    let optionsValue = []
    //Add each value from the elements at the querySelectorAll to optionsValue
    //The devOptions IS NOT AN ARRAY, it is a different type of object, the array is the optionsValue
    devOptions.forEach(element => {optionsValue.push(element.value)})
    //Join all the values in a single array and return as a string
    optionsValue.join(", ")
    alert("Name: " + name + "\nPrimary Color: " + color +
            "\nDo you like programming? " + likeProg + "\nKnowledge: " + optionsValue)


}