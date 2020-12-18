const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const player1TotalScoreEl = document.getElementById('score--0');
const player2TotalScoreEl = document.getElementById('score--1');
const player1CurrentScoreEl = document.getElementById('current--0');
const player2CurrentScoreEl = document.getElementById('current--1');
const getcurrentScoreEl =  function (activePlayer){
    return document.getElementById(`current--${activePlayer}`);
} 
const diceImg = document.querySelector('.dice');
const rollDicebtn = document.querySelector('.btn--roll');
const holdbtn = document.querySelector('.btn--hold');
const newGamebtn = document.querySelector('.btn--new');
export {
    player1El,
    player2El,
    player1TotalScoreEl,
    player2TotalScoreEl,
    player1CurrentScoreEl,
    player2CurrentScoreEl,
    diceImg,
    rollDicebtn,
    holdbtn,
    newGamebtn,
    getcurrentScoreEl,
};
