import * as UIElements from './UIElements/selectedElements.js';
export default function finishGame(winnerEl){
    winnerEl.classList.add('player--winner');
    UIElements.rollDicebtn.disabled = true;
    UIElements.holdbtn.disabled = true;
}