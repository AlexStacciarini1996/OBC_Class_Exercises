let ship = { speed: 0 }
ship.name = prompt("What is the name of the ship?")
ship.type = prompt("What is the type of the ship")
ship.maxSpeed = prompt("What is the maximum speed the ship can travel?")
ship.convertedMaxSpeed = parseInt(ship.maxSpeed)
console.log(ship)
let menu = prompt("Type an option: \n1- Accelerate ship \n2- Stop ship")
switch (menu) {
    case "1":
        let accel = prompt("Type the acceleration speed: ")
        ship.speed += accel
        console.log(ship.speed)
        
        if (ship.speed > ship.convertedMaxSpeed) {
            alert("The ship is faster than the max speed! Stop now!")
        }
        break;
    case "2":
        if (ship.speed == 0) {
            alert("Ship is already stopped")
        }
        else {
            alert("Stopping ship...")
            ship.speed = 0
        }
        break;
}


