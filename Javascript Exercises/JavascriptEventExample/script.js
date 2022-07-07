//This script will add an event to the HTML that will alert the option selected
document.querySelector("select[name = 'select-option']").addEventListener("change", function() { alert(event.target.value) })
//The above line will do the following: select the select-option element, and the addEventListener will add the anonymous function to the "onchange" event of the "select" element