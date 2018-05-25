$(document).ready(function () {
    // generates are random number between 19-120
    var random = Math.floor(Math.random() * 120 + 19);
    // appends the number to the page using HTML class
    $(".randomNumber").text(random);

    // crystal random number assignment
    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)
    total = 0;


    // variables for scores
    var total = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text("Win:" + wins);
    $("#losses").text("Losses:" + losses);

    // adding total wins
    function winning() {
        wins++;
        $("#wins").text("Wins:" + wins);
        reset();
    }

    // adding total losses
    function losing() {
        losses++;
        $("#losses").text("Losses:" + losses);
        reset();
    }
    // on click for jewels

    // reset
    function reset() {
        random = Math.floor(Math.random() * 120 + 19);
        $(".randomNumber").text(random);
        // num1 = Math.floor(Math.random() * 11 + 1);
        // num2 = Math.floor(Math.random() * 11 + 1);
        // num3 = Math.floor(Math.random() * 11 + 1);
        // num4 = Math.floor(Math.random() * 11 + 1);

        generateFour();
        total = 0;
        $(".score").text(total);
    }
// random number assigned to each crystal 
    $('#crystal1').on('click', function () {
        total = total + num1;
        console.log("New total= " + total);
        $(".score").text(total);
        //sets win/lose conditions
        if (total == random) {
            winning();
        }
        else if (total > random) {
            losing();
        }
    })
    $('#crystal2').on('click', function () {
        total = total + num2;
        console.log("New total= " + total);
        $(".score").text(total);
        //sets win/lose conditions
        if (total == random) {
            winning();
        }
        else if (total > random) {
            losing();
        }
    })
    $('#crystal3').on('click', function () {
        total = total + num3;
        console.log("New total= " + total);
        $(".score").text(total);
        //sets win/lose conditions
        if (total == random) {
            winning();
        }
        else if (total > random) {
            losing();
        }
    })
    $('#crystal4').on('click', function () {
        total = total + num4;
        console.log("New total= " + total);
        $(".score").text(total);
        //sets win/lose conditions
        if (total == random) {
            winning();
        }
        else if (total > random) {
            losing();
        }
    });


    function generateCrystals(i){
        var randomNumber = Math.floor(Math.random() * 11 + 1);

        var crystalHolderDiv = $("<div>");

        crystalHolderDiv.attr(
            {
               "class": "col-md-2 crystal",
               "data-value": randomNumber 
            }
        );


        var crystalImageDiv = $("<img>");

        crystalImageDiv.attr(
            {
                "src": "./assets/images/crystal" + i + ".PNG"
            }
        );

        crystalHolderDiv.append(crystalImageDiv);

        $(".buttons").append(crystalHolderDiv);

        
    }

    function generateFour(){
        $(".buttons").empty();
        for(var i = 1; i < 5; i++){
            generateCrystals(i);
        }
    }

    generateFour();



    $(".buttons").on("click", ".crystal", function(){
        console.log($(this));

        console.log($(this)[0].dataset.value)

        var currentGemValue = parseInt($(this)[0].dataset.value);

        total = total + currentGemValue;  
        
        $(".score").text(total);

        console.log(total);

        if(total === random){
            winning();
        }
        else if (total > random){
            losing();
        }

        
    })

});