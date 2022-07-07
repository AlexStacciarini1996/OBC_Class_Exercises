function RegisterAsset() {
    RealEstate.type = document.querySelector("input[name = 'type']:checked").value
    RealEstate.area = document.querySelector("input[name = 'area']").value
    RealEstate.isRent = document.querySelector("input[name = 'rent']:checked").value
    if (RealEstate.isRent == "Yes") {
        let rentText = document.createElement("p")
        rentText.id = "rent-text"
        rentText.innerText = "RENT"
        rentText.style.backgroundColor = "red"
        rentText.style.color = "white"
        document.getElementById("assetlist").appendChild(rentText)
    }
    let newValue = document.createElement("li")
    newValue.id = "asset"
    newValue.innerText = ("Asset type: " + RealEstate.type + "  " + "Area: " + RealEstate.area + "   Is it rent? " + RealEstate.isRent + "   ")
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remove"
    removeButton.setAttribute("onclick", "RemoveAsset(this)")
    newValue.appendChild(removeButton)
    document.getElementById("assetlist").appendChild(newValue)
}



function RemoveAsset(button) {
    let assetToRemove = button.parentNode
    document.getElementById("assetlist").removeChild(assetToRemove)
    let text = document.getElementById("rent-text")
    text = document.getElementById("assetlist").removeChild(text)
}




function ClearForm() {
    let form = document.getElementById("asset-registor")
    form.reset()
}