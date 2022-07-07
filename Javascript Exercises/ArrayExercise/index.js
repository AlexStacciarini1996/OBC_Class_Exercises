const hitchedSpaceships = [["Fenix", 8, true], ["Golias", 10, true], ["Helmet", 5, false], ["Elemental", 3, true], ["Darwin", 15, false]]
let filteredSpaceships = hitchedSpaceships.filter(spaceship => { 
  return spaceship[1] > 9 
}).map(spaceship => {return spaceship[0]}) // esse map no final vai filtrar apenas os nomes das naves

let indexFound = hitchedSpaceships.findIndex(spaceship => { return spaceship[2] == false })
let highlight = hitchedSpaceships.map(spaceship => { return spaceship[0].toUpperCase()})
let message = "Ships with more than 9 crewmates: " + filteredSpaceships.join(", ")
message += "\nPlatform needing dock: " + (indexFound + 1)
message += "\nHighlighted spaceships: " + highlight.join(", ")
alert(message)