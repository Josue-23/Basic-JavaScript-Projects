function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").nodeValue;
    Can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}