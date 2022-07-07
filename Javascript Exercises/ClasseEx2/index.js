let chosenShip = new Spaceship()
let list = []
RegisterShip()
Menu()
function RegisterShip() {
    let shipType = prompt("Type 1 to register a Battleship or anything else to register a Transport Ship")
  
    if (shipType == "1") {
        let battleship = new Battleship()
        battleship.name = prompt("What is the Battleship's name?")
        battleship.crew = prompt("What is the crew amount?")
        battleship.weapons = prompt("How many weapons are available?")
        chosenShip = battleship
        console.log(chosenShip)
        list.push(chosenShip)
    }
    else {
        let transportship = new Transportship()
        transportship.name = prompt("What is the Transport Ship's name?")
        transportship.crew = prompt("What is the crew amount?")
        transportship.seats = prompt("How many seats are available?")
        chosenShip = transportship
        console.log(chosenShip)
        list.push(chosenShip)
    }


}


function Menu() {
    let menu = prompt("This is the ship registering menu. " +
        "\nType 1 to accelerate a ship, 2 for changing ships or 3 for printing and exiting")
    switch (menu) {
        case "1":
            console.log(chosenShip.speed)
            let acceleration = prompt ("Type the speed you want to accelerate the ship. The ship will accelerate by 83% of the given value")
            console.log(acceleration)
            chosenShip.speed = chosenShip.SpeedUp(acceleration)
            console.log(chosenShip.speed)
            Menu()
            break;
        case "2":
            RegisterShip()
            Menu()
            break;
        case "3":
            ShipList()
            break;
        default:
            alert("Please type 1, 2 or 3")
            break;

    }
}
function ShipList() {
    let spaceships = ""
    list.forEach((ship) => { spaceships += ("Name: " + ship.name +"\nCrew: " + ship.crew + "\nCurrent speed " + ship.speed)})
    alert(spaceships)

}