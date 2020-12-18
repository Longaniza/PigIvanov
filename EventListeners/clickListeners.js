import * as UIElements from '../UIElements/selectedElements.js';
import rollDice from '../rollDice.js';
import hold from '../hold.js';
import initGame from '../initGame.js';
const gameState = {
    activePlayer:0,
    player1TotalScore:0,
    player2TotalScore:0
}

UIElements.rollDicebtn.addEventListener('click', () => {
    rollDice(gameState);
});

UIElements.holdbtn.addEventListener('click',()=>{
    hold(gameState);
})

UIElements.newGamebtn.addEventListener('click',()=> {
    gameState.activePlayer=0;
    gameState.player1TotalScore=0;
    gameState.player2TotalScore=0;
    initGame();
})


