
// These are all the options
var guessChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Number of incorrect guesses
var guessesLeft = 7;

var gamesWon = 0;
var gamesLost = 0;

//List of possible words: US presidents , no repeats i.e. Bush comes up once
var wordPool = ["jefferson","washington","obama","truman","eisenhower","lincoln","jackson","trump","bush","clinton","reagan",
"nixon","carter","ford","johnson","roosevelt","hoover","coolidge",
"harding","wilson","taft","mckinley","cleveland","harrison",
"arthur","garfield","hayes","grant","buchanan","pierce","fillmore",
"taylor","polk","tyler","vanburen","adams","monroe","madison",] 
 //38 names


        // This will randomly choose the word for each game
        var theWord = wordPool[Math.floor(Math.random() * wordPool.length)];

 var wordPoolLength = wordPool.length;

// This should split word into array with each letter being an index
    var splitWord = theWord.split("");
    var splitLength = splitWord.length;
    
    //HOPEFULLY, splits from array into divs
    for (var w = 0; w < splitLength; w++) {
        var newElement = document.createElement("div");
        newElement.id = splitWord[w]; 
        newElement.className = "blanks";
        newElement.innerHTML = '-';
        document.body.appendChild(newElement);
    }
    

 //   var guessElement = document.getElementById("guesses-left");
 
 //working on getting a div with an id that matches the user guess
 //var matchId = document.getElementbyId(userGuess);
    

document.onkeyup = function (event) {
    
        // Determines which key was pressed.
        var userGuess = event.key;
            
        

    //If user guess is one of the letters
        
        
            if(splitWord.includes(userGuess)){

               console.log(getElementbyId(userGuess)); 
                for(var i=0; i < splitLength; i++){

                    
                console.log("you've got one");

                 //   }
                    
                    
                   // guessElement.textContent = "You have " + guessesLeft + " left.";
                    
              
                }
            }   
            else{
            guessesLeft = guessesLeft - 1;
            document.getElementById("guesses-left").innerHTML=guessesLeft;
            console.log(guessesLeft);
            }

            if (guessesLeft === 0){

                gamesLost = gamesLost + 1;
                document.getElementById("games-lost").innerHTML=gamesLost;
            }


        
            console.log(splitWord);
}
