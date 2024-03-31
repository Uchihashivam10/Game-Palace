var level = 0;
var globalUser = [];
var gamePat = [];
var colours = ["red", "blue", "green", "yellow"];
// var started = false;

$(document).keypress(function () {
    
        $("#level-title").text("Level " + level);
        gam();
})

$(".btn").click(function () {
    var userChosen = $(this).attr("id");
    globalUser.push(userChosen);
    playsound(userChosen);
    animatePress(userChosen);
    checkAnswer(globalUser.length - 1);
})

function checkAnswer(currentLevel) {
    if (gamePat[currentLevel] === globalUser[currentLevel]) {
        if (globalUser.length === gamePat.length) {
            setTimeout(function () {
                gam();
            }, 1000);
        }
    }
    else {
        playsound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }

}

function gam() {
    globalUser = [];
    level++;
    $("h1").text("level " + level);
    var num = Math.floor(Math.random() * 4);
    var chosenCol = colours[num];
    gamePat.push(colours[num]);
    var temp = $("#" + chosenCol);

    $(temp).fadeOut(100).fadeIn(100);
    playsound(chosenCol);

}


function playsound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function () {
        $("#" + currentColour).removeClass("pressed");

    }, 100);
}
function startOver() {
    level = 0;
    gamePat.length=0;
    // started = false;
}

