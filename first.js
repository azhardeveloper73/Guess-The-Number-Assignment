let guessedNumber = Math.ceil(Math.random() * 20);

const checkBtn = document.querySelector("#checkBtn");
const againBtn = document.querySelector("#againBtn");
const input = document.querySelector("input");

const message = document.querySelector("#right").children[0];
const scoreEl = document.querySelector("#score");
const highScoreEl = document.querySelector("#highScore");

let score = 5;
let highScore = 0;

scoreEl.textContent = score;
highScoreEl.textContent = highScore;

// 🎯 CHECK BUTTON
checkBtn.addEventListener("click", function () {
  const userAnswer = Number(input.value);

  // input clear on every click ✅
  input.value = "";

  if (checkBtn.disabled) return;

  if (!userAnswer) {
    message.textContent = "⛔ Please enter a number!";
    return;
  }

  if (score === 0) {
    message.textContent = "💥 Game Over!";
    checkBtn.disabled = true;
    return;
  }

  if (userAnswer === guessedNumber) {
    message.textContent = "🎉 You Won!";
    checkBtn.disabled = true;

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  } else {
    score--;

    const difference = guessedNumber - userAnswer;

    if (difference < 0) {
      message.textContent =
        difference === -1 || difference === -2
          ? "📈 Too high, but very close!"
          : "📈 Too high!";
    } else {
      message.textContent =
        difference === 1 || difference === 2
          ? "📉 Too low, but very close!"
          : "📉 Too low!";
    }

    if (score === 0) {
      message.textContent = "💥 Game Over!";
      checkBtn.disabled = true;
    }
  }

  scoreEl.textContent = score;
});

// 🔁 AGAIN BUTTON
againBtn.addEventListener("click", function () {
  score = 5;
  guessedNumber = Math.ceil(Math.random() * 20);

  message.textContent = "Start Guessing...";
  scoreEl.textContent = score;

  input.value = "";
  checkBtn.disabled = false;
});
