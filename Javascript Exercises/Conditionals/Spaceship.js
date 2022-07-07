let ShipSpeed = 0
let PilotName = prompt ("What is your name, pilot?")
NewShipSpeed = prompt("Please type a number between 1 and 1000 to set the ship speed")
let confirmSpeed = confirm("Set speed to " + ShipSpeed + "Mm/s?")
if (confirmSpeed) 
{
    NewShipSpeed = ShipSpeed
}
if (ShipSpeed <= 0)
{
    alert("Ship not moving. Please increase the speed")
}
else if (ShipSpeed > 0 && ShipSpeed < 400)
{
    alert("Speed too low.")
}
else if (ShipSpeed > 400  && ShipSpeed < 800)
{
    alert("Good speed.")
}
else if (ShipSpeed > 800 && ShipSpeed < 100)
{
    alert("Speed too high, please decrease speed.")
}
else 
{
    alert ("Dangerous speed. Forced Auto Pilot Engaged.")
}
alert("Pilot name: " + PilotName + "\n Speed: " + ShipSpeed + "Mm/s")