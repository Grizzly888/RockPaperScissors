let userScore = 0;
let computerScore = 0;
let gameScore=0;
let userChoice;



function computerPlay() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    computerSelection = choices[randomNumber];
    return computerSelection;
  }

function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay();
    console.log('Game function: user choice is = ' + playerSelection);
    console.log('Game function: computer choice is = ' + computerSelection);

    switch (playerSelection + computerSelection) {
        case "paperrock":
        case "rockscissors":
        case "scissorspaper":
          
          gameScore = gameScore +1;
          userScore = userScore +1;


          //Console output
          console.log(`You win! ${playerSelection} beats ${computerSelection}`);
          console.log(`User score is ${userScore}.`);
          console.log(`Computer score is ${computerScore}.`);

          break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
          
          gameScore = gameScore +1; 
          computerScore= computerScore +1;


          //Console output
          console.log(`You Lost! ${computerSelection} beats ${playerSelection}`);
          console.log(`User score is ${userScore}.`);
          console.log(`Computer score is ${computerScore}.`);
          break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
          gameScore = gameScore +1;
        
          
          //Console output
          console.log("draw");
          break;
      }
}

function game(){
  alert(`Rock Paper Scissors is a hand game originating from China, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are "rock", "paper", and "scissors".`);
  alert(`In order to play you need to choose either "rock", "paper", or "scissors"`);
  alert("Remember: Rock beats Scissors, Paper beats Rock, Scissors beats Paper");
  for (var i = 0; i <5; i++){
       playRound(getUserChoice());
  }
  if(userScore > computerScore){
    console.log("You Won a game of 5 rounds!")
  }
  else if (userScore < computerScore) {
    console.log("You Lost a game of 5 rounds!")
  } else {
    console.log("It's a draw!")
  }
}

function getUserChoice(){
    let userChoice = prompt("Enter Rock, Paper or Scissors").toLowerCase();
    return userChoice;
}

        
game();     