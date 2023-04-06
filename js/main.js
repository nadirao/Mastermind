 /*----- constants -----*/
  const userGuess = [0,1,2,3,4,5];
  const colors = ['blue','pink','yellow','green','red','orange'];
  const numOfGuesses = 4;

  /*----- state variables -----*/
  let circleToFill;
  let rowToFill; // attmept number initialized to 9
  let winColorToFill; // win sequence initialized to random 
  let rowToCompare = []; // current guess 
  /*----- cached elements  -----*/
  const restartBtnEl = document.getElementById('restartBtn');
  const colorEl = document.querySelector('.colors');
  const winEl = document.querySelectorAll('.secret-color');
  const hintEl = document.querySelectorAll('.hint');
  const boardEl = document.querySelector('#board');
  const currAttemptEl = document.querySelectorAll('.row');
  const guessEl = document.querySelectorAll('.guess');
  const winRowEl = document.querySelectorAll('.win-sequence');
  const colorRowEl = document.querySelectorAll('.colors');


  /*----- event listeners -----*/
  restartBtnEl.addEventListener('click', function handleClick(evt){
       // when this button is clicked , gameboard should clear colortofill 
       // and rowtofill and hints
       initialize();

  })

  colorEl.addEventListener('click', function pickColor(evt){
      const clickedEl = evt.target;

      if (clickedEl.tagName !== 'DIV') return;

      if (circleToFill === 5){
            rowToCompare = [];
            circleToFill = 1;
            rowToFill -= 1;
      }


      currAttemptEl[rowToFill].children[circleToFill].style.backgroundColor = clickedEl.id
      circleToFill += 1;

      rowToCompare.push(clickedEl.id)
       
      if(rowToCompare.length === 4){
            let count = 0;
            for (let i = 0; i < 4; i++){
                  if (rowToCompare[i] === winColorToFill[i]){
                        count +=1;
                        //update hints 
                  }
            }
            if (count === 4){
                  alert('you won')
            }
      }

      
  });


  /*----- functions -----*/

  initialize();
  //used to initialize all state variables
  function initialize() {
      rowToFill = 9;
      circleToFill = 1;
      winColorToFill = [];
      winColorToFill = getWin();
      console.log(winColorToFill)
      currGuess = [];
      // put win logic 
      //render();
  }

  function getWin(){

      for(let i = 0; i < 4; i++){
            winColorToFill.push(colors[Math.floor(Math.random() * 5)])
      }

      return winColorToFill
  }

  function renderWin() {

  }


  //responsible for transferring all state variables to the dom
//   function render() {

//   }

// function guessCode() {

// }


