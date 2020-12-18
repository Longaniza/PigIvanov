import * as UIElements from './UIElements/selectedElements.js';
export default function switchPlayer(gameState) {
    if(gameState.activePlayer===0){
        UIElements.player1CurrentScoreEl.textContent = 0;
        UIElements.player1El.classList.remove('player--active');
        UIElements.player2El.classList.add('player--active');
        gameState.activePlayer=1;
    }
    else {
        UIElements.player2CurrentScoreEl.textContent = 0;
        UIElements.player2El.classList.remove('player--active');
        UIElements.player1El.classList.add('player--active');
        gameState.activePlayer=0;
    }
}