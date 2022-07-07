let ShipName = prompt("What is the ship's name?")
let CharOverwrite = prompt ("Which character would you like to overwrite?")
let NewChar = prompt ("What is going to be the new character?")
let NewShipName = ""
for (i = 0; i < ShipName.length; i++)
{
    console.log(ShipName[i])
    if (ShipName[i] == CharOverwrite)
    {
        NewShipName += NewChar
        
    }
    else 
    {
        NewShipName += ShipName[i]
        
    }

}
alert(NewShipName)
