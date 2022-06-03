let userScore = 0;
let computerScore = 0;
let gameScore=0;
const choices = document.querySelectorAll('choice');

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
          document.getElementById("result").innerText = "YOU WIN";
          document.getElementById("result").style.color = 'green';
          gameScore = gameScore +1;
          userScore = userScore +1;
          updateScore();

          //Console output
          console.log("user wins");
          console.log(`User score is ${userScore}.`);
          console.log(`Computer score is ${computerScore}.`);

          break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
          document.getElementById("result").innerText ="YOU LOST";
          document.getElementById("result").style.color = 'red';
          gameScore = gameScore +1; 
          computerScore= computerScore +1;
          updateScore();

          //Console output
          console.log("computer wins");
          console.log(`User score is ${userScore}.`);
          console.log(`Computer score is ${computerScore}.`);
          break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
          gameScore = gameScore +1;
          document.getElementById("result").innerText = "DRAW";
          document.getElementById("result").style.color = 'yellow';
          
          //Console output
          console.log("draw");
          break;
      }
}
function updateScore(){
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
}
function game(playerSelection){
    if (gameScore < 5){
      playRound(playerSelection);
    }
    else {
      console.log("game is over");
      if(userScore > computerScore){
        document.getElementById("myPopup").innerHTML = `You Won! <br /> Congratulations! <br/> <a href="../index.html">Close</a>`;
      }
      else {
        document.getElementById("myPopup").innerHTML = `You Lost! <br/> Better luck next time! <br/> <a href="../index.html">Close</a>`;
      }
      document.getElementById("myPopup").classList.toggle("show");
    }
    
    
}

function main(){
    document.getElementById("rock").addEventListener("click",() => game("rock"));
    document.getElementById("paper").addEventListener("click", () => game("paper"));
    document.getElementById("scissors").addEventListener("click", () => game("scissors"));
}

        
main();     