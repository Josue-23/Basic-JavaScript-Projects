var X = 450;
function Add_numbers_1() {
    document.write(420 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//global variable//
function Add_nubers_1() {
    var X = 10;
    document.write(20 + X + "<br>");
}
function Add_numbers_2() {
    document.write(X + 100);
}
Add_numbers_1();
Add_numbers_2();
//Local variable//
function get_Date () {
    if (new Date().getHours() < 18) {
    document.getElementById("Greetings").innerHTML="How are you today?";
    }
}
//This is gonna be my time function//
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is moring time!";
    }
    else if(Time >=12 == Time > 18) {
        Reply = "It is afternoon.";
    } 
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}
//My time function//