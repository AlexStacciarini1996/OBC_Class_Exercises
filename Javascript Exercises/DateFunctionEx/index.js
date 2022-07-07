let FoodTime 
{

}
FoodTime.year = parseInt(prompt("What year is this?"))
FoodTime.month = prompt("What month is this?")
FoodTime.day = prompt("What day is this?")
CheckFood(FoodTime.month, FoodTime.day)
function CheckFood(month, day)
{
 if (month == "12" && day == "24") {
alert("Christmas Food time!")
 }
 else {
     alert("Not food time... Sadge...")
 }
}