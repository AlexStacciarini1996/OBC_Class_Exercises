class Spaceship {
    constructor(name, crew, isHitched, openDoors) {
        this.name = name;
        this.crew = crew;
        this.isHitched = isHitched;
        this.openDoors = openDoors;
    }
}
let loop = true
let ShipList = []
while(loop) {
Menu()
}







function RegisterShip() {
    let ship = new Spaceship()
    ship.name = prompt("Type the name of the ship")
    ship.crew = prompt("Type the crew amount")
    let hitched = prompt("Type 1 if to hitch the ship and open the doors, or 2 for unhitching and closing the doors")
    if (hitched == "1") {
        ship.isHitched = true;
        ship.openDoors = true;
    }
    else if (hitched == "2") {
        ship.isHitched = false
        ship.openDoors = false;
    }
    console.log(ship)
    ShipList.push(ship)
    console.log(ShipList)


}
function ShowShips() {
    let spaceships = ""
    ShipList.forEach((ship) => { spaceships += ("Name: " + ship.name +"\nCrew: " + ship.crew + "\nIs the ship hitched? " + ship.isHitched + "\n Are the doors open? \n" + ship.openDoors)})
    alert(spaceships)
    
}

function Menu() {
    let menu = prompt("This is the ship registering menu. " +
    "\nType 1 to register a ship, 2 for printing the list of ships or 3 for exiting")
    switch (menu)  {
        case "1":
            RegisterShip()
            break;
        case "2":
            ShowShips()
            break;
        case "3":
            loop = false
            break;
        default:
            alert("Please type 1, 2 or 3")
            break;

    }
    
}