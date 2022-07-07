let HyperCounter = 0
let ShipName = prompt("Type the name of the ship")
let option = prompt("Would you like to enter Hyperspace? \n 1 - Yes \n 2 - No")
while(option == "1")
{
HyperCounter++
option = prompt ("Would you like to enter Hyperspace again? \n 1 - Yes \n 2 - No")

}
alert("Ship Name: " + ShipName + "\n Number of Hyperspace jumps: " + HyperCounter)
