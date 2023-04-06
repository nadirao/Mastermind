 /*----- constants -----*/
  const userGuess = [0,1,2,3,4,5];
  const colors = ['blue','pink','yellow','green','red','orange'];
  const numOfGuesses = 4;
  const totalAttempts = 10;

  /*----- state variables -----*/
  let attemptNum; // attmept number initialized to 1
  let win; // win sequence initialized to random 
  let currGuess; // current guess 
  /*----- cached elements  -----*/
  const playBtnEl = document.getElementById('playBtn');
  const colorEl = document.querySelectorAll('.colors > div');
  const guessEl = document.querySelectorAll('.guess');
  const winEl = document.querySelectorAll('.secret-color');
  const hintEl = document.querySelectorAll('.hint');
  const boardEl = document.querySelector('#board');
  const currAttemptEl = document.querySelectorAll('.row');
  const winRowEl = document.querySelectorAll('.win-sequence');
  const colorRowEl = document.querySelectorAll('.colors');

  /*----- event listeners -----*/


  /*----- functions -----*/

  initialize();
  //used to initialize all state variables
  function initialize() {
      attemptNum = 1;
      win = getWin();
      currGuess = [];
        render();
  }

  function getWin(){

  }

  function render() {

  }