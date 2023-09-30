// Define ANSI escape codes for text color
const red = "\x1b[31m"; // Red text
const green = "\x1b[32m"; // Green text
const reset = "\x1b[0m"; // Reset text color

const computerPlay = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  
  if (playerSelection === computerSelection) {
    return "It's a tie! " + playerSelection + " equals " + computerSelection;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return (
      green +
      "You win! " +
      playerSelection +
      " beats " +
      computerSelection +
      reset
    );
  } else {
    return (
      red +
      "You lose! " +
      computerSelection +
      " beats " +
      playerSelection +
      reset
    );
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let round = 1;
  const validChoices = ["rock", "paper", "scissors"];

  function playAgain() {
    const playAgainChoice = prompt(
      "Do you want to play again? (yes/no)"
    ).toLowerCase();
    return playAgainChoice === "yes";
  }

  alert(
    " Welcome to the deadly Rock, Paper or Scissors Game. Warning!!!You might lose your laptop to Branko if you fail. hahahahaha"
  );
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      ` Round ${round++}; Enter your choice (Rock, Paper, or Scissors) OR click cancel to end the game: `
    );

    // Check if the user cancels
    if (playerSelection === null) {
      console.log("Game ended. You cancelled the game.");
      return; 
    }

    playerSelection = playerSelection.toLowerCase();

    // Check for invalid input
    while (!validChoices.includes(playerSelection)) {
      alert("Invalid input. Please enter Rock, Paper, or Scissors.");
      playerSelection = prompt(
        "Enter your choice (Rock, Paper, or Scissors):"
      ).toLowerCase();
    }

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(
      "You win the game! Your score: " +
        playerScore +
        " Computer's score: " +
        computerScore
    );
  } else if (playerScore < computerScore) {
    console.log(
      "You lose the game! Your score: " +
        playerScore +
        " Computer's score: " +
        computerScore
    );
  } else {
    console.log(
      "It's a tie! Your score: " +
        playerScore +
        " Computer's score: " +
        computerScore
    );
  }
};

game();
