function Count_To_Ten() {
    var Money = "";
    var Q = 1;
    while(Q < 11) {
        Money += "<br>" + Q;
        Q ++;
    }
    document.getElementById("Counting_To_Ten").innerHTML = Money;
}
//This is my while loop//


var Animals = ["Tiger", "Lion", "Monkey"];
var Content = "";
var A;
function for_Loop() {
    for (A = 0; A < Animals.length; A++) {
    Content += Animals[A] + " <br>";
    }
    document.getElementById("List_of_animals").innerHTML = Content;
}
//This is my for loop//


function Student_List() {
    var Student_Class = [];
    Student_Class[0] = "10%";
    Student_Class[1] = "50%";
    Student_Class[2] = "100%";
    document.getElementById("Student").innerHTML = "This student got " +  Student_Class[2] + ".";
}
//This is my array//


var J = 23;
document.write("<br>" + J);
{
    let J = 17;
    document.write("<br>" + J);
}
document.write("<br>" + J);
//This is my Let keyword//


