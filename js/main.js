 /*----- constants -----*/
 const colors = ['blue','pink','yellow','green','red','orange'];
 /*----- state variables -----*/

 let circleToFill; //current guess (just the individual guess to fill with color selected)
 let rowToFill; // attmept number initialized to 9 last row but first attempt in gameplay
 let winColorToFill; // win sequence initialized to random 
 let rowToCompare; // current guess (all 4 in array to compare with win sequence)
 let hintToFill; //hint number init to 0
 let hintElToFill; //hint element init to 9 last row but first attempt in gameplay
 
 /*----- cached elements  -----*/

 const restartBtnEl = document.getElementById('restartBtn');
 const colorEl = document.querySelector('.colors');
 const winEl = [...document.querySelectorAll('.secret-color')];
 const hintEl = [...document.querySelectorAll('.hints-container')];
 const currAttemptEl = [...document.querySelectorAll('.row')];
 const guessEl = [...document.querySelectorAll('.guess')];
 const winRowEl = document.querySelectorAll('.win-sequence');
 const hintInHintEl = document.querySelectorAll('.hint');
 const winAudio = document.querySelector('#win-audio')
 const loseAudio = document.querySelector('#lose-audio')
 const playBtnEl = document.getElementById('startBtn')
 const gameInstructionsEl = document.getElementById('game-instructions');

 /*----- event listeners -----*/
 
restartBtnEl.addEventListener('click', restartGame);
colorEl.addEventListener('click', pickColor);
guessEl.forEach(guess => guess.addEventListener('click', changeGuessColor));
playBtnEl.addEventListener('click', startGame);

 /*----- functions -----*/

initialize();
 //used to initialize all state variables
function initialize() {
     rowToFill = 9;
     circleToFill = 1;
     rowToCompare = [];
     winColorToFill = [];
     hintToFill = 9;
     hintElToFill = 0;
//      render();
 };


//addeventlistener to playbtn
 function startGame(evt){
      const clickedPlayEl = evt.target;

      if(clickedPlayEl.id !== 'startBtn') return;

      if(clickedPlayEl.id === 'startBtn'){
            winColorToFill = getWin();
            winRowEl[0].style.visibility = 'hidden';
            gameInstructionsEl.style.visibility = 'hidden';
      }

 };


//addeventlistener to restart button
function restartGame(evt){
   initialize();
   loseAudio.pause();
   winAudio.pause();
   gameInstructionsEl.style.visibility = 'visible';
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
                  winAudio.play();
                  winRowEl[0].style.visibility = 'visible';restartBtnEl.style.visibility = 'visible';
            }
            
      }
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
      
      // for(let j = 39; j>=36; j --){
      //       if(circleToFill > 0 && rowToCompare.length > 0){
      //             if(guessEl[j]=== clickedGuessEl) {
      //                   guessEl[j].style.backgroundColor = 'white'
      //                   console.log('clicked')
      //                          circleToFill--;
      //                          rowToCompare.length--;
      //             }
            
      //       }
      // }

      // guessEl.forEach(guess => {
      //       let countRows = 9;

      //       if (rowToCompare.length > 0){
      //             if(guess === clickedGuessEl){
      //                         guess.style.backgroundColor = 'white'
      //                         circleToFill -= 1;
      //                         rowToCompare.length -= 1;

      //             }
      //       }
      //       })
};

     //to-do: 1) stop execution at win
     //2)incorporate render functions to code and refactor!
     //3) hint logic, no order for matches and no order for close matches
     //4)take back guess on current row ONLY
     //5) OPTIONAL update styling of border/highlight on current row





      
 
