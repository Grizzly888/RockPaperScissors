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
          //win(playerSelection, computerChoice);
          document.getElementById("result").innerText = "YOU WIN";
          document.getElementById("result").style.color = 'green';
           console.log("user wins");
          break;
        case "rockpaper":
        case "scissorsrock":
        case "paperscissors":
          //loses(userChoice, computerChoice);
          document.getElementById("result").innerText ="YOU LOST";
          document.getElementById("result").style.color = 'red';
           console.log("computer wins");
          break;
        case "rockrock":
        case "scissorsscissors":
        case "paperpaper":
          //draw(userChoice, computerChoice);
          document.getElementById("result").innerText = "DRAW";
          document.getElementById("result").style.color = 'yellow';
           console.log("draw");
          break;
      }
}

    document.getElementById("rock").addEventListener("click",() => playRound("rock", computerPlay()));
    document.getElementById("paper").addEventListener("click", () => playRound("paper",computerPlay()));
    document.getElementById("scissors").addEventListener("click", () => playRound("scissors",computerPlay()));

