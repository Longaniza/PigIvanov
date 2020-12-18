import * as UIElements from './UIElements/selectedElements.js';

export default function initGame(){
    UIElements.player1El.classList.remove('player--winner');
    UIElements.player2El.classList.remove('player--winner');
    UIElements.player1El.classList.add('player--active');
    UIElements.player2El.classList.remove('player--active');
    UIElements.rollDicebtn.disabled = false;
    UIElements.holdbtn.disabled = false;
    UIElements.player1TotalScoreEl.textContent = 0;
    UIElements.player2TotalScoreEl.textContent = 0;
    UIElements.player1CurrentScoreEl.textContent = 0;
    UIElements.player2CurrentScoreEl.textContent = 0;
    UIElements.diceImg.classList.add('hidden');
};

