import * as UIElements from './UIElements/selectedElements.js';
import switchPlayer from './switchPlayer.js';
import diceImages from './assets/*.png';
export default function rollDice(gameState){
    const randomNumber = Math.floor((Math.random() * 6) + 1);
    UIElements.diceImg.src = diceImages[`dice-${randomNumber}`];
    UIElements.diceImg.classList.remove('hidden');
    if(randomNumber===1){
        switchPlayer(gameState);
    }
    else {
        const currentElementPlayerEl = UIElements.getcurrentScoreEl(gameState.activePlayer);
        currentElementPlayerEl.textContent = Number(currentElementPlayerEl.textContent) + randomNumber;
    }
    
}