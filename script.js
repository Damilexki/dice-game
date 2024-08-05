'use strict';

const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const resetBtn = document.querySelector('.btn--new');

const dice = document.querySelector('.dice');

let activePlayer, currentScore, currentPlayer, score;

const init = () => {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  currentPlayer = document.querySelector(`.player--${activePlayer}`);

  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;

  currentPlayer.classList.add('player--active');
  dice.classList.add('hidden');
};

init();

const switchPlayer = () => {
  activePlayer = activePlayer == 0 ? 1 : 0;
  dice.classList.add('hidden');
  currentScore = 0;
  currentPlayer = document.querySelector(`.player--${activePlayer}`);
  currentPlayer.classList.add('player--active');
};

rollDiceBtn.addEventListener('click', () => {
  // generate random dice roll
  const randomDiceRoll = Math.trunc(Math.random() * 6) + 1;
  dice.src = `dice-${randomDiceRoll}.png`;
  dice.classList.remove('hidden');

  if (randomDiceRoll === 1) {
    document.getElementById(`score--${activePlayer}`).textContent = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    score[activePlayer] = 0;
    currentScore = 0;
    switchPlayer();
  } else {
    // Add randomDiceRoll to current score
    currentScore += randomDiceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
});

holdBtn.addEventListener('click', () => {
  score[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).innerText =
    score[activePlayer];
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  switchPlayer();
});

resetBtn.addEventListener('click', init);
