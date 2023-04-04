/* Application State and Constants

State variables (Data that changes throughout gameplay)
Winner: -Represented by the player or the absence of a winner using null
        -No ties, and no additional players
Hints:  -Hints are changing throughout gameplay. Initialize hints to null
        -Once gameplay begins, if color in guess and position in guess matches color in winning combo and position in winning combo, then X space (out of four) in the hint is filled black
        -Else if color in guess matches color in winning combo but position in guess does not match any position in winning combo, then X space (out of four) in the hint is filled white
        -Else hints stay null

Board:  -Seven rows. One row for color selection (6 Elements)(constant), five rows for attempts (4 Elements) (state: changing throughout gameplay based on user selection of colors), and one row for the winning combo (4 Elements)
        -(the amount of attempts varies, up to five but can be less based 
        on how many attempts the player needs to guess the winning combo >= 1 <= 5) 
        -one dimensional array for the attempts, winning combos and color selection
        -2D array (2 columns and 2 rows) for the hints (idek lol??) 

Constant Variables (Data that cannot change throughout gameplay)
Color Selection: -Six colors to choose from will maintain throughout game play
Number of total attempts: -Five
Number of guesses per attempt: -Four
Player: -One player



Pseudocode

Game at initialization will display color selection, five attempts, hints set to null, and winning combo is hidden. Winning combo is selected at random using math.random.

Player clicks "Play" button and game is started. "Play" button visibility is 'hidden' while game is being played. "Play" button visibility will be 'visible' in two cases: if player wins, and if player exhausts attempts. 

At any attempt out of five attempt, player selects four colors from the six provided. Player can choose four different colors, four of the same colors and ... 


Case 1: Colors are guessed correctly but positions are not correct
IF one color in (1st, 2nd, 3rd, 4th, and 5th attempts) === one color in the winning combo THEN set one hint to white
IF two colors in (1st, 2nd, 3rd, 4th, and 5th attempts) === two colors in the winning combo THEN set two hints to white
IF three colors in (1st, 2nd, 3rd, 4th, and 5th attempts) === three colors in the winning combo THEN set three hints to white
IF All colors in (1st, 2nd, 3rd, 4th, and 5th attempts) === all colors in the winning combo THEN set four hints to white

Case 2: One or more colors are guessed correctly, and one or more colors and positions are guessed correctly
IF one color in (1st, 2nd, 3rd, 4th, and 5th attempts) AND one color and position (1st, 2nd, 3rd, 4th, and 5th attempts) === one color in the winning combo AND one color and position in the winning combo THEN set one hint to white and one hint to black

Case 3: Colors and positions are guessed correctly
IF one guess (color and position) in (1st, 2nd, 3rd, 4th, and 5th attempts) === one guess (color and position) in the winning combo THEN set one hint to black
IF two guesses (color and position) in (1st, 2nd, 3rd, 4th, and 5th attempts) === two guesses (color and position) in the winning combo THEN set two hints to black
IF three guesses (color and position) in (1st, 2nd, 3rd, 4th, and 5th attempts) === three guesses (color and position) in the winning combo THEN set three hints to black

Win Case:
IF four guesses (color and position) in (1st, 2nd, 3rd, 4th, and 5th attempts) === four guesses (color and position) in the winning combo THEN player wins, set winning combo visibility to 'visible' and play again visibility to 'visible'. GAME OVER

Lose Case:
IF ALL five attempts are exhausted and guesses !== winning combo then player loses, set winning combo visibility to 'visible' and play again visibility to 'visible'. GAME OVER

*/  
 


  
  /*----- constants -----*/


  /*----- state variables -----*/


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/
