let ShipName = prompt ("What is the name of the ship?")
let newShipName = ""
let forbiddenLetter = "e"
/*
for (let i = 0; i < ShipName.length; i++)
{
    
    newShipName += ShipName[i]
    console.log(newShipName)
}
*/
for (let i = ShipName.length - 1; i >= 0; i--)
{
    newShipName += ShipName[i]
    if (ShipName[i] == forbiddenLetter)
    {
        break
    }
}
alert("Original ship name: " + ShipName + "\n Inverted ship name: " + newShipName)
