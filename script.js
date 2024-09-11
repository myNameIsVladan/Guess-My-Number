'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector(".guess").value = 23
document.querySelector(".guess").value;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

const checkBtn = document.querySelector('.check');
const input = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highscoreEl = document.querySelector('.highscore');
const bodyEl = document.querySelector('body');
const againBtn = document.querySelector('.again');
let score = 20;
let highscore = 0;

checkBtn.addEventListener('click', function () {
  const guess = +input.value;

  if (!guess) {
    message.textContent = 'No number!';
  } else if (guess === secretNumber) {
    message.textContent = 'Correct Number!';
    bodyEl.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      highscoreEl.textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = 'Too High!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      scoreEl.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = 'Too Low!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = 'You lost the game!';
      scoreEl.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  scoreEl.textContent = score;
  message.textContent = 'Start guessing...';
  bodyEl.style.backgroundColor = '#222';
  input.value = '';
  document.querySelector('.number').style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
});
