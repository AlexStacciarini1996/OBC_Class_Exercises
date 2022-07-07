let ShipSpeed = 0
let ShipName = prompt("What is the name of the ship?")
let chosenOption

do {
    chosenOption = Menu()
    switch (chosenOption) {
        case "1":
            ShipSpeed = Accelerate(ShipSpeed)
            break
        case "2":
            ShipSpeed = SlowDown(ShipSpeed)
            break
        case "3": 
            ShipData(ShipName, ShipSpeed)
            break
        default:
            alert("Exiting Program...")
            break
    }
} while (chosenOption != 4)

function Menu() {

    let option
    while (option != "1" && option != "2" && option != "3" && option != "4") {
        option = prompt("What do you want to do?\n" +
            "1 - Speed up ship in 5km/s \n" +
            "2 - Slow down ship in 5 km/s \n" +
            "3 - Print ship data \n" +
            "4 - Exit Program")
    }
    return option
}


function Accelerate(speed) {
    let newSpeed = speed + 5
    alert("Ship accelerating at 5 km/s")
    return newSpeed

}
function SlowDown(speed) {
    if (speed < 0) {
       speed = 0
    }
    else {
        let newSpeed = speed - 5
        alert("Ship slowing down at 5 km/s")
        return newSpeed
    }
}
function ShipData(shipName, shipSpeed) {
    alert("Ship Name: " + shipName + "\nShip Speed: " + shipSpeed)

}