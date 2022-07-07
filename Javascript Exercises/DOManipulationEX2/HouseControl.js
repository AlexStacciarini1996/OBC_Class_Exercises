


class House {
    constructor(number, nbh, city, area) {
        number = this.number
        nbh = this.nbh
        city = this.city
        area = this.area
        }
}


function CreateHouse(number, nbh, city, area) {
    let house = new House()
    number = document.getElementById("residenceNumber")
    house.number = number.value
    nbh = document.getElementById("neighbour")
    house.nbh = nbh.value
    city = document.getElementById("city")
    house.city = city.value
    area = document.getElementById("area")
    house.area = area.value
    /*
    console.log(number.value)
    console.log(nbh.value)
    console.log(city.value)
    console.log(area.value)
    console.log(house)
    */
    //event.preventDefault() 
    let houseList = document.getElementById("houselist")
    let houseEntry = document.createElement("li")
    houseEntry.appendChild(document.createTextNode(JSON.stringify(house)))
   // console.log(houselist)
    houseList.appendChild(houseEntry)

    
}
function RemoveHouse()
{

}