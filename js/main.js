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
  const winEl = document.querySelectorAll('.secret-color');
  const hintEl = document.querySelectorAll('.hint');
  const boardEl = document.querySelector('#board');
  const currAttemptEl = document.querySelectorAll('.row');
  const guessEl = document.querySelectorAll('.guess');
  const winRowEl = document.querySelectorAll('.win-sequence');
  const colorRowEl = document.querySelectorAll('.colors');


//   currAttemptEl[attemptNum-1].querySelectorAll('.colors')

  /*----- event listeners -----*/
  playBtnEl.addEventListener('click', function handleClick(evt){
        //when the playBtn is clicked update attemptNum to 1st attempt
        //update the currGuess to 1st attempt 1st guess
        //update the win to a random sequence of colors
        attemptNum = totalAttempts -1;

       let rowDivs = [...currAttemptEl[attemptNum].querySelectorAll('.guess')];
        
       rowDivs.forEach(function(rowDiv){
            rowDiv.style.backgroundColor = colors[0];
      })
      


        // evt.target.style.visibility = 'hidden'



        return rowDivs
  })


  /*----- functions -----*/

  initialize();
  //used to initialize all state variables
  function initialize() {
      attemptNum = null;
      win = getWin();
      currGuess = [];

      //render();
  }

  function getWin(){

  }


  //responsible for transferring all state variables to the dom
//   function render() {

//   }

function guessCode() {
      
}
