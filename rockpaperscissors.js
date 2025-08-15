let p = 0;
let c = "default";
let h = "default";
let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
   p = Math.random();
   
    if (p < 0.3333) {
        let c = "rock";
        console.log(c);
        return c;
    } else if (p > 0.6666) {
        let c = "scissors";
        console.log(c);
        return c;
    } else {
        let c = "paper";
        console.log(c);
        return c;
    }
}
function getHumanChoice() {
    h = prompt("Rock, Paper, or Scissors?");
    console.log(h);
}

function playRound (humanChoice, computerChoice) {
    computerChoice = getComputerChoice();
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
    if (humanChoice === "rock") {
        if(computerChoice === "rock") {
            console.log("Rocks CLINK, No winner.");
        } else if (computerChoice ==="paper") {
            console.log("Paper wraps Rock, you lose...")
            computerScore = computerScore + 1;
            console.log(computerScore);
        } else {
            console.log("Rock smashes Scissors, you win!!!")
            humanScore = humanScore + 1;
            console.log(humanScore);
        }
    } else if (humanChoice === "paper") {
        if(computerChoice === "paper") {
            console.log("Paper flaps uselessly, No winner.")
        } else if (computerChoice ==="rock") {
            console.log("Paper wraps Rock, You win!!!")
            humanScore = humanScore + 1;
        } else {
            console.log("Paper is now confetti, you lose...")
            computerScore = computerScore + 1;
    }
    } else if (humanChoice === "scissors") {
        if(computerChoice === "scissors") {
            console.log("Scissors clink and clack, but nothing happens. No winner.")
        } else if (computerChoice ==="paper") {
            console.log("Paper is now confetti, you Win!!!")
            humanScore = humanScore + 1;
        } else {
            console.log("Rock smashes Scissors, you loose...")
            computerScore = computerScore + 1;
    }
    } else {
        console.log("What the hell is that? Try again.")
    }
}

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");

// btn.addEventListener("click", function(){
//     playRound()
// })


const buttonContainer = document.getElementById("buttonContainer");
const roundMsg = document.getElementById("roundMSG");

    buttonContainer.addEventListener("click", function(event) {
        if (event.target.tagName === 'BUTTON') {
            const clickedButton = event.target;
            playRound(clickedButton.id, getComputerChoice);
            const score = document.getElementById("scoreMsg");
            score.textContent = "Your Score: " + humanScore + "  Computer's Score: " + computerScore;
            if (humanScore >= 5 || computerScore >= 5) {
                if (humanScore > computerScore) {
                alert("You win the game!!!");
                } else if (computerScore > humanScore) {
                alert("You lose the game...");
                } else {
                alert("Tie, no one wins.")
            }
            } 
        }
    });

// btnRock.addEventListener("click", function(){
//     playRound("rock", getComputerChoice);
// });
// btnPaper.addEventListener("click", function(){
//     playRound("paper", getComputerChoice);
// });
// btnScissors.addEventListener("click", function(){
//     playRound("scissors", getComputerChoice);
// });



//document.appendChild(score);      

// for (let j = 0; j < 5; j++) {
//     getHumanChoice()
//     playRound(h,c);
//     console.log("Your Score: " + humanScore);
//     console.log("Computer's Score: " + computerScore);
// }


