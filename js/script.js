//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//alert("running external JS code!")

//Global variables
let randomNumber;
let attempts = 0;
let totalWins = 0;
let totalLosses = 0;

initializeGame();

function initializeGame() {
 randomNumber = Math.floor(Math.random() * 99) + 1;
 console.log("randomNumber: " + randomNumber);
 attempts = 0;

 //hiding the Reset button
 document.querySelector("#resetBtn").style.display = "none";

 //showing the Guess button
 document.querySelector("#guessBtn").style.display = "inline";

 let playerGuess = document.querySelector("#playerGuess");
 playerGuess.focus(); //adding focus to textbox
 playerGuess.value = ""; //clearing the textbox

 let feedback = document.querySelector("#feedback");
 feedback.textContent = ""; //clearing the feedback

 //clearing previous guesses
 document.querySelector("#guesses").textContent = "";

 //resetting attempts left
 document.querySelector("#attemptsLeft").textContent = 7;

 //display total wins and losses
 document.querySelector("#wins").textContent = totalWins;
 document.querySelector("#losses").textContent = totalLosses;
}

console.log(randomNumber);

//document.querySelector("h1").style.color = "red";

function checkGuess() {
 let feedback = document.querySelector("#feedback");
 feedback.textContent = "";

 let guess = document.querySelector("#playerGuess").value;
 console.log("Player guess: " + guess);

 if (guess < 1 || guess > 99) {
 feedback.textContent = "Enter a number between 1 and 99";
 feedback.style.color = "red";
 return;
}

 attempts++;
 console.log("Attempts:" + attempts);

 //update how many attempts left
 document.querySelector("#attemptsLeft").textContent = 7 - attempts;

 feedback.style.color = "orange";

 if (guess == randomNumber) {
  feedback.textContent = "You guessed it! You Won!";
  feedback.style.color = "darkgreen";

  //counting total wins
  totalWins++;
  document.querySelector("#wins").textContent = totalWins;

  gameOver();
} else {
 document.querySelector("#guesses").textContent += guess + " "; 
 if (attempts == 7) {
   feedback.textContent = "Sorry, you lost!";
   feedback.style.color = "red";

   //counting total losses
   totalLosses++;
   document.querySelector("#losses").textContent = totalLosses;

   gameOver();
} else if ( guess > randomNumber) {
    feedback.textContent = "Guess was high";
} else {
    feedback.textContent = "Guess was low";
}
 }
}

function gameOver() {
 let guessBtn = document.querySelector("#guessBtn");
 let resetBtn = document.querySelector("#resetBtn");
 guessBtn.style.display = "none"; //hides Guess button
 resetBtn.style.display = "inline"; //displays Reset button
}