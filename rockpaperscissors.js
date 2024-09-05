let yourchoice;
let computerchoice;
let yourscore = 0;
let computerscore = 0;

alert("You will play rock paper scissors in order to enter this super secret webpage. The computer will randomly select its choice and beat you every single time. Play until 5 points");

function rockpaperscissors() {
yourchoice = prompt("Enter 'rock', 'paper', or 'scissors'");
}
function RandomInt(max) {
    return Math.floor(Math.random() * max);
}
function evaluatechoice() {
    if (yourchoice=="rock") {
        console.log(0);
        yourchoice=0;
    } else if (yourchoice=="paper") {
        console.log(1);
        yourchoice=1;
    } else if (yourchoice=="scissors") {
        console.log(2);
        yourchoice=2;
    } else {
        alert("Something about your answer did not match the guidelines of the prompt. Try again.")
        question();
    }
}

function question() {
rockpaperscissors();
console.log(yourchoice);
evaluatechoice();
}

function computerchoose() {
    computerchoice=RandomInt(3);
    console.log("computer choice: " + computerchoice);
    if (computerchoice==0) {
        alert("computer chose rock")
    } else if (computerchoice==1) {
        alert("computer chose paper")
    } else if (computerchoice==2) {
        alert("computer chose scissors")
    }
}
function computerchooserigged() {
    if (yourchoice==0) {
        computerchoice=1
        alert("computer chose paper")
    } else if (yourchoice==1) {
        computerchoice=2
        alert("computer chose scissors")
    } else if (yourchoice==2) {
        computerchoice=0
        alert("computer chose rock")
    }
}

function comparescore() {
    if (yourchoice==0) {
        if (computerchoice==0) {
            alert("draw")
        } else if (computerchoice==1) {
            computerscore++
            alert("loss")
        } else if (computerchoice==2) {
            yourscore++
            alert("win")
        }
    } else if (yourchoice==1) {
        if (computerchoice==0) {
            yourscore++
            alert("win")
        } else if (computerchoice==1) {
            alert("draw")
        } else if (computerchoice==2) {
            computerscore++
            alert("loss")
        }
    } else if (yourchoice==2) {
        if (computerchoice==0) {
            computerscore++
            alert("loss")
        } else if (computerchoice==1) {
            yourscore++
            alert("win")
        } else if (computerchoice==2) {
            alert("draw")
        }
    }
    alert("Your score: " + yourscore + " Computer score: " + computerscore)
    console.log(yourscore + " - " + computerscore)
}


while (yourscore<4&&computerscore<5) {
    question();
    computerchoose();
    comparescore();
}
while (computerscore<5) {
    question();
    computerchooserigged();
    comparescore();
}
alert("computer won!")
close();
