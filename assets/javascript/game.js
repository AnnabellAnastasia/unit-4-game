


var random_result;
var win = 0;
var lost = 0;
var previous = 0;

// 
var resetAndStart = function () {
    // empty the crystal
    $(".crystals").empty();
    // generating a new random number
    random_result = Math.floor(Math.random() * 69) + 30;
    // adding the number to the DOM
    $("#result").html('Random Result: ' + random_result);
    // looping four times and creating a ne number
    for (var i = 0; i < 4; i++) {
        var random = Math.floor(Math.random() * 11) + 1;
        //    creating a div for a random number
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        // pulling to the DOM
        $(".crystals").append(crystal);
    }
    $("#previous").html("Total Score" + previous);

}

$("#previous").html(previous);

resetAndStart();

// event delegation. 
$(document).on('click', ".crystal", function () {

    var num = parseInt($(this).attr('data-random'));

    previous += num;
    $("#previous").html("Total Score:" + previous);
    console.log(previous);

    if (previous > random_result) {
        lost++;
        $("#lost").html("Not yet!" + lost);

        previous = 0;
        $("#previous").html(previous);

    }
    else if (previous === random_result) {
        win++;
        $("#win").html("Great job: " + win);

        previous = 0;

        resetAndStart();
    }
});



// a new random number should be generated every single time we win or lost to those 4 crystals
// when clicking any cristal, it should adding with the previous result;
// until it equals the random result;
// if it is greater than the random result , we decrement a lost counter 
// if it is equal, then we increment a win counter