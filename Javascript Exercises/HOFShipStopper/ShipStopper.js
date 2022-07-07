
function ShipSlower(shipSpeed, printer) {
    let decel = 20
    while (shipSpeed > 0){
        printer (shipSpeed)
        shipSpeed -= decel
    }
    alert("Ship stopped. You can open the doors and exit.")
    
}

let speed = 150
ShipSlower(speed, function(velocity) { console.log("Current speed: " + velocity)})
