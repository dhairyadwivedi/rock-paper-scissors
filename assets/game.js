let playerWins = 0;
let computerWins = 0;
let maxWins = 5;
let choiceArr = ["rock", "paper", "scissors"]; 

//select elements
let message = document.querySelector("#game-message");
let scoreboard = document.querySelector("#scoreboard");
let winner = document.querySelector("#winner");
let resetButton = document.querySelector("#reset-button")

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// computer's play
function computerPlay(){
  let computerGame = getRandomInt(1, 3);
  if(computerGame == 1){
    return ("rock");
  }else if(computerGame == 2){
    return ("paper");
  }else {
    return ("scissors");
  }
}

function startRound(playerChoice, computerChoice){
  switch (playerChoice) {
    case "rock":
      if(computerChoice == "paper"){
        computerWins++;
        message.innerHTML = "Computer Wins! :(";
      } else if(computerChoice == "scissors"){
        playerWins++;
        message.innerHTML = "You Win!";  
      } else if(computerChoice == playerChoice){
        message.innerHTML = "It's a Draw!";
      }
      break;
    case "paper":
      if(computerChoice == "scissors"){
        computerWins++;
        message.innerHTML = "Computer Wins!";
      } else if(computerChoice == "rock"){
        playerWins++;
        message.innerHTML = "You Win!";
      } else if(computerChoice == playerChoice){
        message.innerHTML == "It's a Draw";
      }
      break;
    case "scissors":
      if(computerChoice == "rock"){
        computerWins++;
        message.innerHTML = "Computer Wins!";
      } else if(computerChoice == "paper"){
        playerWins++;
        message.innerHTML = "You Win!";
      } else if(computerChoice == playerChoice){
        message.innerHTML = "It's a Draw!";
      }
      break;
  }
}

function game(){
  maxWins = 5;
  let computerChoice = computerPlay();
  startRound(playerChoice, computerChoice);
  score();
}
function gameStart(){
  document.getElementById("rock").disabled = true;
  document.getElementById("paper").disabled = true;
  document.getElementById("scissors").disabled = true;
}
function score(){
  scoreboard.innerHTML = `You: ${playerWins}  |  Computer: ${computerWins}`;

  if(playerWins == maxWins){
    winner.innerHTML = "You Won the Game!";
    gameStart();
  } else if(computerWins == maxWins){
    winner.innerHTML = "Computer Wins this One!";
    gameStart();
  }
}

var rock = document.querySelector('#rock');
var paper = document.querySelector('#paper');
var scissors = document.querySelector('#scissors');
var reset = document.querySelector('#reset');
rock.addEventListener('click', () => {
  playerChoice = "rock";
  game();
});
paper.addEventListener('click', () => {
  playerChoice = "paper";
  game();
});
scissors.addEventListener('click', () => {
  playerChoice = "scissors";
  game();
});
reset.addEventListener('click', () => {
  playerWins = 0;
  computerWins = 0;
  message.innerHTML = "";
  scoreboard.innerHTML = "";
  winner.innerHTML = "";
  document.getElementById("rock").disabled = false;
  document.getElementById("paper").disabled = false;
  document.getElementById("scissors").disabled = false;
  resetButton.setAttribute('style', 'visibility: hidden');
});

