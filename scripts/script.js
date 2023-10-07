// Define ANSI escape codes for text color
const red = "\x1b[31m"; // Red text
const green = "\x1b[32m"; // Green text
const reset = "\x1b[0m"; // Reset text color

const choices = ["rock", "paper", "scissors"];
let round = 1; 

const computerPlay = () => {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const playerChoice = () => {
  let input = prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors): OR click cancel to end the game`); 

  // Check if the user cancels
  if (input === null) {
    console.log("Game ended. You cancelled the game.");
    return;
  }

  input = input.trim().toLowerCase();

  // Check for invalid input
  while (!choices.includes(input)) {
    alert("Invalid input. Please enter Rock, Paper, or Scissors.");
    input = prompt(`Round ${round}: Enter your choice (Rock, Paper, or Scissors): OR click cancel to end the game`); 
    input = input.trim().toLowerCase();
  }

  return input;
};

const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `Round ${round}: It's a tie! ${playerSelection} equals ${computerSelection}`; 
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    return (
      green +
      `Round ${round}: You win! ${playerSelection} beats ${computerSelection}` +
      reset
    ); 
  } else {
    return (
      red +
      `Round ${round}: You lose! ${computerSelection} beats ${playerSelection}` +
      reset
    ); 
  }
};

const determineWinner = (playerScore, computerScore) => {
  if (playerScore > computerScore) {
    return `You win the game! Your score: ${playerScore} Computer's score: ${computerScore}`;
  } else if (playerScore < computerScore) {
    return `You lose the game! Your score: ${playerScore} Computer's score: ${computerScore}`;
  } else {
    return `It's a tie! Your score: ${playerScore} Computer's score: ${computerScore}`;
  }
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;

  alert(
    "Welcome to the deadly Rock, Paper or Scissors Game. Warning!!! You might lose your laptop to Branko if you fail. hahahahaha"
  );

  for (let i = 0; i < 5; i++) {
    const playerSelection = playerChoice();
    const computerSelection = computerPlay();

    const result = playRound(playerSelection, computerSelection);
    console.log(result);

    if (result.includes("win")) {
      playerScore++;
    } else if (result.includes("lose")) {
      computerScore++;
    }

    round++;
  }

  const gameResult = determineWinner(playerScore, computerScore);
  console.log(gameResult);
};

game();
