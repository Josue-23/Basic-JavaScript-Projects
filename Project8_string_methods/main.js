function full_sentence() {
    var part_1="this is";
    var part_2="  sweet!";
    var Whole_sentence = part_1.concat(part_2);
    document.getElementById("Concatenate").innerHTML=Whole_sentence;
}
//This is a concat method//





function slice_Method() {
    var Sentence = "All this work will pay off for me!.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}
//This is my Slice method//







function string_Method() {
    var str = "Hello World";
    var res = str.toString();
    document.getElementById("String").innerHTML = res;
}
//This is my String method//




function precision_Method() {
    var X = 129876.8904567;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}
//This is my precision method//
