var playerWon = 0;
var playerLost = 0;
var compWon = 0;
var compLost = 0;
var draw = 0;

var playerWon_span = document.getElementById("player-won");
var playerLost_span = document.getElementById("player-lost");
var compWon_span = document.getElementById("comp-won");
var compLost_span = document.getElementById("comp-lost");
var draw_span = document.getElementById("draw");
var scores_div = document.querySelector(".scores");
var result_div = document.querySelector(".result");
var rock_div = document.getElementById("rock");
var paper_div = document.getElementById("paper");
var scissors_div = document.getElementById("scissors");
var playerCrown_span = document.getElementById("player-crown");
var compCrown_span = document.getElementById("comp-crown");

function EndGame(option) {
    if (compWon > playerWon) {
        compCrown_span.innerHTML = "👑";
    }
    else if (playerWon > compWon) {
        playerCrown_span.innerHTML = "👑";
    }
    else {
        compCrown_span.innerHTML = "";
        playerCrown_span.innerHTML = "";
    }

    setTimeout(() => {
        result_div.style.opacity = 0;
        setTimeout(() => {
            result_div.innerHTML = "<br>Choose from the options below:";
            result_div.style.opacity = 1;
        }, 300)
    }, 1400);
}


function PlayerWin(compChoice) {
    playerWon++;
    playerWon_span.innerHTML = playerWon;
    compLost++;
    compLost_span.innerHTML = compLost;
    result_div.style.opacity = 0;
    setTimeout(() => {
        result_div.innerHTML = "You won!<br>Your opponent chose<u><b>" + compChoice;
        result_div.style.opacity = 1;
    }, 300)
    EndGame();
}
function PlayerLose(compChoice) {
    playerLost++;
    playerLost_span.innerHTML = playerLost;
    compWon++;
    compWon_span.innerHTML = compWon;
    result_div.style.opacity = 0;
    setTimeout(() => {
        result_div.innerHTML = "You lost!<br>Your opponent chose<u><b>" + compChoice;
        result_div.style.opacity = 1;
    }, 300)
    EndGame();
}
function Draw(compChoice) {
    draw++;
    draw_span.innerHTML = draw;
    result_div.style.opacity = 0;
    setTimeout(() => {
        result_div.innerHTML = "Draw.<br>Your opponent also chose<u><b>" + compChoice;
        result_div.style.opacity = 1;
    }, 300)
    EndGame();
}

function GetCompChoice() {
    var choices = ["rock", "paper", "scissors"];
    var randNum = Math.floor(Math.random() * 3);
    return choices[randNum];
}

function PlayGame(playerChoice) {
    var compChoice = GetCompChoice();
    switch (playerChoice + compChoice) {
        case "rockscissors":
        case "scissorspaper":
        case "paperrock":
            PlayerWin(compChoice);
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            PlayerLose(compChoice);
            break;
        case "scissorsscirssors":
        case "paperpaper":
        case "rockrock":
            Draw(compChoice);
            break;
    }
}

    rock_div.addEventListener('click', function () {
        PlayGame("rock");
    })

    paper_div.addEventListener('click', function () {
        PlayGame("paper");
    })

    scissors_div.addEventListener('click', function () {
        PlayGame("scissors");
    });
