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

    // variables for scores
    var total = 0;
    var wins = 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);

    // adding total wins
    function winner() {
        wins++;
        $("#wins").text(wins);
    }

    // adding total losses
    function losing() {
        losses++;
        $("#losses").text(losses);
        reset()
    }
    // on click for jewels

    // reset
    function reset() {
        random = Math.floor(Math.random() * 120 + 19);
        $(".randomNumber").text(random);
        num1 = Mathfloor(Math.random() * 11 + 1);
        num2 = Mathfloor(Math.random() * 11 + 1);
        num3 = Mathfloor(Math.random() * 11 + 1);
        num4 = Mathfloor(Math.random() * 11 + 1);
        total = 0;
        $(".yourScore").text(total);
    }

    $('#crystal1').on('click', function () {
        total = total + num1;
        console.log("New total= " + total);
        $('#yourScore').text(total);
        //sets win/lose conditions
        if (total == random) {
            winning();
        }
        else if (total > random) {
            losing();
        }
    })
    $('#crystal2').on('click', function () {
        total = total + num1;
        console.log("New total= " + total);
        $('#yourScore').text(total);
        //sets win/lose conditions
        if (total == random) {
            winning();
        }
        else if (total > random) {
            losing();
        }
    })
    $('#crystal3').on('click', function () {
        total = total + num1;
        console.log("New total= " + total);
        $('#yourScore').text(total);
        //sets win/lose conditions
        if (total == random) {
            winning();
        }
        else if (total > random) {
            losing();
        }
    })
    $('#crystal4').on('click', function () {
        total = total + num1;
        console.log("New total= " + total);
        $('#yourScore').text(total);
        //sets win/lose conditions
        if (total == random) {
            winning();
        }
        else if (total > random) {
            losing();
        }
    });
});