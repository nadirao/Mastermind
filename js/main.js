 /*----- constants -----*/
 const userGuess = [0,1,2,3,4,5];
 const colors = ['blue','pink','yellow','green','red','orange'];

 
 /*----- state variables -----*/
 let circleToFill;
 let rowToFill; // attmept number initialized to 9
 let winColorToFill; // win sequence initialized to random 
 let rowToCompare; // current guess 
 let hintToFill;
 let hintElToFill;
 /*----- cached elements  -----*/
 const restartBtnEl = document.getElementById('restartBtn');
 const colorEl = document.querySelector('.colors');
 const winEl = [...document.querySelectorAll('.secret-color')];
 const hintEl = [...document.querySelectorAll('.hints-container')];
 const boardEl = document.querySelector('#board');
 const currAttemptEl = [...document.querySelectorAll('.row')];
 const guessEl = [...document.querySelectorAll('.guess')];
 const winRowEl = document.querySelectorAll('.win-sequence');
 const colorRowEl = document.querySelectorAll('.colors');
 const hintInHintEl = document.querySelectorAll('.hint');
 let winAudio = document.querySelector('#win-audio')
 let loseAudio = document.querySelector('#lose-audio')
 
 /*----- event listeners -----*/
 
restartBtnEl.addEventListener('click', restartGame);

colorEl.addEventListener('click', pickColor);

guessEl.forEach(guess => guess.addEventListener('click', changeGuessColor));

 /*----- functions -----*/

initialize();
 //used to initialize all state variables
function initialize() {
     rowToFill = 9;
     circleToFill = 1;
     rowToCompare = [];
     winColorToFill = [];
     winColorToFill = getWin();
     winRowEl[0].style.visibility = 'hidden';
//      console.log(winColorToFill)
     currGuess = [];
     hintToFill = 9;
     hintElToFill = 0;

     // put win logic 
     //render();
 }

 function pickColor(evt){
      const clickedEl = evt.target;

     if (clickedEl.className !== 'sub-color') return;

     if (circleToFill === 5){
           rowToCompare = [];
           circleToFill = 1;
           rowToFill -= 1;
           hintElToFill = 0;
           hintToFill -= 1;
           currAttemptEl[rowToFill+1].style.border = 'none';
           currAttemptEl[rowToFill+1].style.padding = '0';
           currAttemptEl[rowToFill+1].style.borderRadius = 'none';
     }

//      if(circleToFill === 4){
//     
//      }

     if (rowToFill <= 9 ){
            restartBtnEl.style.visibility = 'hidden';
     };

     if (rowToFill < 0 ){
      //bug
            winRowEl[0].style.visibility = 'visible';
            restartBtnEl.style.visibility = 'visible';
            loseAudio.play();
            return;
     }

     currAttemptEl[rowToFill].style.border = '1px solid #555';
     currAttemptEl[rowToFill].style.borderRadius = '10px';
     currAttemptEl[rowToFill].style.padding = '.7vmin';

     currAttemptEl[rowToFill].children[circleToFill].style.backgroundColor = clickedEl.id
     circleToFill += 1;

     // hintEl[hintToFill].children[hintElToFill].style.backgroundColor = 'black';

     rowToCompare.push(clickedEl.id)
      
     if(rowToCompare.length === 4){
           let countGuesses = 0;

           for (let i = 0; i < 4; i++){
                 if (rowToCompare[i] === winColorToFill[i]){
                        hintEl[hintToFill].children[i].style.backgroundColor = 'black';
                       countGuesses +=1;
                 } 
           } 
           
           if (countGuesses === 4){
            //      winMsgEl.innerText = 'You Win. Click Restart to Play Again!'
                  winAudio.play();
                  winRowEl[0].style.visibility = 'visible';restartBtnEl.style.visibility = 'visible';
            }
            
      }
 };

 function restartGame(evt){
         // when this button is clicked , gameboard should clear colortofill 
      // and rowtofill and hints 
      initialize();
      guessEl.forEach(attempt => {
           attempt.style.backgroundColor = 'white'
      })

      hintInHintEl.forEach(hint => {
            hint.style.backgroundColor = 'lightgray'
       })


       currAttemptEl.forEach(attempt => {
            attempt.style.border = 'none';
       })
 };

function getWin(){

     for(let i = 0; i < 4; i++){
           winColorToFill.push(colors[Math.floor(Math.random() * 6)])
           winEl[i].style.backgroundColor = winColorToFill[i]
     }

     return winColorToFill
 };

function changeGuessColor(evt){
      const clickedGuessEl = evt.target;
      //  console.log(evt)
      //while on current row
      //let player click on guess and change to different color
      //



      guessEl.forEach(guess => {
            let countRows = 9;

            if (rowToCompare.length > 0){
                  if(guess === clickedGuessEl){
                              guess.style.backgroundColor = 'white'
                              circleToFill -= 1;
                              rowToCompare.length -= 1;

                  }
            }
            })
};


     //to-do: 1) stop execution at win
     //stop execution at lose
     //incorporate render functions to code
      //refactor!

      
     //2) hint logic, no order for matches and no order for close matches
     //take back guess on current row ONLY
     //update styling of border/highlight on current row




      
 
