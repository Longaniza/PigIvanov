import * as UIElements from './UIElements/selectedElements.js';
import switchPlayer from './switchPlayer.js';
import finishGame from './finishGame.js';
export default function hold(gameState) {
    const currentScoreEl = UIElements.getcurrentScoreEl(gameState.activePlayer);
    if(gameState.activePlayer === 0){
        gameState.player1TotalScore += Number(currentScoreEl.textContent);
        UIElements.player1TotalScoreEl.textContent = gameState.player1TotalScore;
        if(gameState.player1TotalScore>=100){
            finishGame(UIElements.player1El);
            return;
        }
    }
    else {
        gameState.player2TotalScore += Number(currentScoreEl.textContent);
        UIElements.player2TotalScoreEl.textContent = gameState.player2TotalScore;
        if(gameState.player2TotalScore>=100){
            finishGame(UIElements.player2El);
            return;
        }
    }
   
    switchPlayer(gameState);
}