function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
//This is for a ride!//

function Animal(Type, Color, Year) {
    this.Animal_Type = Type;
    this.Animal_Year = Year;
    this.Animal_Color = Color;
}
var Tigger = new Animal("Tiger", 1995, "orange");
var DOv    = new Animal("Wolf", 2002, "black")
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = 
    "tigger is a " + Tigger.Animal_Type + "-colored- " + Tigger.Animal_Year + 
    "born in " + Tigger.Animal_Color;
}

//This is a nested function!//

function count_Function() {
    document.getElementById("Counting").innerHTML= Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point =+1;}
        Plus_one();
        return Starting_point;
    }
}