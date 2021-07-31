let min = 1,
  max = 5,
  winningNum = generateRandomNumber(min, max),
  guessLeft = 3;

//ui elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn");
guessInput = document.querySelector("#guess-input");
message = document.querySelector(".message");

//Assign min and max in UI
minNum.textContent = min;
maxNum.textContent = max;

//play again event listener
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

guessInput.addEventListener("focus", function () {
  message.textContent = "";
  guessInput.style.borderColor = "black";
  guessInput.value = "";
});
//Event Listeners
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    message.style.color = "red";
    message.textContent = `Please enter a valid Number in the range of ${min} to ${max}`;
    return;
  }
  if (guess === winningNum) {
    guessBtn.value = "Play Again";
    guessBtn.className += "play-again";
    guessInput.disabled = true;
    guessInput.style.borderColor = "green";
    message.style.color = "green";
    message.textContent = "Congrats You Won the game";
  } else {
    guessLeft--;
    if (guessLeft === 0) {
      guessBtn.value = "Play Again";
      guessBtn.className += "play-again";
      guessInput.disabled = true;
      guessInput.style.borderColor = "red";
      message.style.color = "red";
      message.textContent = `Oops you have exhaused the guess limit. You Lost and correct number is ${winningNum}`;
    } else {
      guessInput.style.borderColor = "red";
      message.style.color = "red";
      message.textContent = `That's a wrong try. You have ${guessLeft} more chances left`;
    }
  }
});

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
