const humanElement = document.getElementById("humanScore");
const computerElement = document.getElementById("computerScore");
const drawElement = document.getElementById("drawScore");

let drawScore = 0;
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let rand;
  rand = Math.floor(Math.random() * 3);
  switch (rand) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playGame() {
  const playerChoice = document.querySelectorAll("button");
  playerChoice.forEach((button) => {
    button.addEventListener("click", () => {
      let humanChoice = button.id;
      let computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    });
  });
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    alert("It's a draw!");
    drawScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
    alert("You WIN! Rock beats Scissors!");
    playerScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    alert("You WIN! Paper beats Rock!");
    playerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    alert("You WIN! Scissors beats Paper!");
    playerScore++;
  } else {
    alert(`You LOSE! ${computerChoice} beats ${humanChoice}!`);
    computerScore++;
  }
  if(computerScore == 5 || playerScore == 5){
    return resetGame();
  }else{
  updateScore();
}
}

function updateScore() {
  humanElement.innerText = playerScore;
  computerElement.innerText = computerScore;
  drawElement.innerText = drawScore;
}

function resetGame(){
  alert("Winner: " + (computerScore === 5 ? "Computer" : "Player"));
  computerScore = 0;
  playerScore = 0;
  drawScore = 0;
  updateScore();
  
}

playGame();


