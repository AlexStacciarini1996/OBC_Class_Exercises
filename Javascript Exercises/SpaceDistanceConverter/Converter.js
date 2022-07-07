let DistanceLY = prompt("Please, type the distance in light-years")
let option = prompt("Please choose to which unit you want to convert. \n Type 1 for parsec \n Type 2 for Astronomical Units or \n Type 3 for Km")
switch(option)
{
    case "1": 
       let distanceP = DistanceLY * 0.306601
        alert("Distance in Light Years: " + DistanceLY + "\n Conversion chosen: " + distanceP + " Parsec" )
        break
    case "2":
        let distanceAU = DistanceLY * 63241.1
        alert("Distance in Light Years: " + DistanceLY + "\n Conversion chosen: " + distanceAU+ " AUs" )
        break
    case "3":
        let distanceKM = DistanceLY * (9.5 * Math.pow(10,12))
        alert("Distance in Light Years: " + DistanceLY + "\n Conversion chosen: " + distanceKM+ " Kms" )
        break
    default:
        alert("Unit was not identified, unable to convert...")
}