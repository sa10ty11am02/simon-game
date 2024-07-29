var buttoncolor = ["red", "blue", "green", "yellow"] ;
var gamePattern = [];

function nextSequence(){
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttoncolor[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}

function playSound(numb){
    var audio = new Audio("sounds/" + numb + ".mp3")
    audio.play();
}

