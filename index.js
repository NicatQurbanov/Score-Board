let homeScoreText = document.getElementById("homeScore");
let guestScoreText = document.getElementById("guestScore");
let homeScore = 0;
let guestScore = 0;

function homeAdd1() {
    homeScore++;
    homeScoreText.textContent = homeScore;
    checkScores() 
}


function homeAdd2() {
    homeScore += 2
    homeScoreText.textContent = homeScore;
    checkScores() 
}

function homeAdd3() {
    homeScore += 3
    homeScoreText.textContent = homeScore;
    checkScores() 
}

function guestAdd1() {
    guestScore++;
    guestScoreText.textContent = guestScore;
    checkScores() 
}

function guestAdd2() {
    guestScore += 2
    guestScoreText.textContent = guestScore;
    checkScores() 
}

function guestAdd3() {
    guestScore += 3
    guestScoreText.textContent = guestScore;
    checkScores() 
}

function newGame() {
    guestScore = 0;
    homeScore = 0;
    guestScoreText.textContent = guestScore;
    homeScoreText.textContent = homeScore;
    document.getElementById("guestContainer").style.border = "3px solid transparent";
    document.getElementById("homeContainer").style.border = "3px solid transparent";
}

function checkScores() {
    if (guestScore < homeScore ) {
        document.getElementById("homeContainer").style.border = "3px solid red";
        document.getElementById("guestContainer").style.border = "3px solid transparent";
    } else  {
        document.getElementById("homeContainer").style.border = "3px solid transparent";
        document.getElementById("guestContainer").style.border = "3px solid red";
    }
    
} 
