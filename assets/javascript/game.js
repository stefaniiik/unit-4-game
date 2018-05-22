$(document).ready(function() {
    // generates are random number between 19-120
    var random = Math.floor(Math.random()* 120 + 19);
    // appends the number to the page using HTML class
    $(".randomNumber").text(random);

    // crystal random number assignment
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)

    // variables for scores
    var total = 0;
    var wins = 0;
    var losses = 0;

})