

// These are all the options
var guessChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Number of incorrect guesses
var guessesLeft = 7;
var gamesWon = 0;
var gamesLost = 0;
var lettersGuessed = "";

//List of possible words: US presidents , no repeats i.e. Bush comes up once
var wordPool = ["jefferson","washington","obama","truman","eisenhower","lincoln","jackson","trump","bush","clinton","reagan",
"nixon","carter","ford","johnson","roosevelt","hoover","coolidge",
"harding","wilson","taft","mckinley","cleveland","harrison",
"arthur","garfield","hayes","grant","buchanan","pierce","fillmore",
"taylor","polk","tyler","vanburen","adams","monroe","madison",] 
 //38 names


        // This will randomly choose the word for each game
        function chooseWord (){
            theWord = wordPool[Math.floor(Math.random() * wordPool.length)];      
        }
        chooseWord();
// This should split word into array with each letter being an index
    var splitWord = theWord.split("");
    var splitLength = splitWord.length;
    var correct = [];

    var answerField = document.getElementById("answer-field");
   
    //HOPEFULLY, splits from array into divs
  
    function makeField(){
        for (var w = 0; w < splitLength; w++) {
            var lastDivTiles = document.createElement("div");
            lastDivTiles.id = w; 
            lastDivTiles.className = "tiles";
            lastDivTiles.innerHTML = '-';
            answerField.appendChild(lastDivTiles);
        }
    }

    makeField();

function removeField(){
    for(var i =0; i < splitLength; i++){
 var fieldDiv = document.getElementById("answer-field");
    var findClasses = document.getElementById(i);
    fieldDiv.removeChild(findClasses);
    }
}

var img = new Image();
var div = document.getElementById("photo-div");

function getImage(){
        img.onload = function() {
        div.innerHTML += '<img src="'+img.src+'" />'; 
      };
    img.src = "assets/images/" + theWord + ".jpg";
}

getImage();
//need this after it picks a new word.
function replaceImage(){
    var nextImage = document.createElement("img");
    nextImage.src = "assets/images/" + theWord + ".jpg";
    var imageDiv = document.getElementById("photo-div");
    imageDiv.replaceChild(nextImage, imageDiv.childNodes[0]);
}

function gameOver(){
    lettersGuessed = "";
    guessesLeft = 7;
}

    function winCheck() { 
        // Win condition 
        var different = false; 
        for(var i = 0; i < splitLength; i++) { 
            if(correct[i] !== splitWord[i]) { 
                different = true;
            } 
        } 
        if(!different) { 
           gamesWon = gamesWon + 1; 
            console.log("Games Won: " + gamesWon); 
            document.getElementById("games-won").innerHTML = gamesWon;
            console.log("WIN!!!!!!"); 
            gameOver(); 
            chooseWord(); 
            console.log(theWord);
            replaceImage();
            removeField();
            makeField(); 
            //getImage(); 
        } 
    } 
    //Starts on key up
document.onkeyup = function (event) {
    
        // Determines which key was pressed.
        //var userGuess = event.key;
        
        //try to convert caps into lowercase
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        

        //to find indices of all occurrences of a letter and puts index of each occurrence in array
        var indices = [];
            for(var a = 0; a < splitLength; a++){
                if(splitWord[a]===userGuess) {
                    indices.push(a);
                    console.log("Pushing into indices");      
                }
                else{
                indices.push("");
                }
            }

// for(b = 0; b < splitLength; b++){

//     if(splitWord[b]===userGuess){
//         if(lastDivTiles.id===indices[b])
//        // lastDivTiles.innerHTML = userGuess;
//     console.log("let's see");
//     }    
// }

//If user's guess is in the word
    if(splitWord.includes(userGuess)){            

       //replaces letter 
       for(c = 0 ; c < splitLength ; c++){
            if(indices[c]===0 || indices[0] || indices[c] ){
                var idFind = document.getElementById(indices[c]).innerHTML = userGuess ;
                correct[c] = userGuess; 
                console.log("CORRECT: " + correct); 
                console.log("fingers crossed");
                winCheck();
            }
        }
    }   
            //You lose a guess when you guess incorrectly.
            else{

                //check if user has guessed letter previously, if not, do these
                var noDoubles = lettersGuessed.search(userGuess);
                if(noDoubles === -1){
                    
                    //subtract a guess
                    guessesLeft = guessesLeft - 1;
                    document.getElementById("guesses-left").innerHTML = guessesLeft;
                    console.log(guessesLeft);

                    //shows letters you have guessed
                    lettersGuessed = lettersGuessed + userGuess + ", ";
                    document.getElementById("guesses").innerHTML = lettersGuessed;
                }
            }

            
            // //if there are no tiles with "-". you win
        //      var winCheck = document.getElementsByClassName("tiles");
        //      for( d = 0; d < splitLength; d++){
        //         if (winCheck.textContent !== "-" ){
        //             console.log("You win");
        //             console.log( typeof winCheck);
        //             console.log(winCheck);
        //             gamesWon = gamesWon + 1;
        //             console.log("games won = "+ gamesWon);
        //             document.getElementById("games-won").innerhtml = gamesWon;
        //            chooseWord();
        //             console.log(theWord);
                   
        //         }
        //    }      

            // you lose if you run out of guesses
            if (guessesLeft === 0){
                gamesLost = gamesLost + 1;
                document.getElementById("games-lost").innerHTML=gamesLost;
                console.log("you lost");  
                gameOver();
                chooseWord();
                replaceImage();
                removeField();
                //makeField();

            }
           
//             //replaces letter 
//             for(c = 0 ; c < splitLength ; c++){
//                 if(indices[c]===0 || indices[0] || indices[c] ){
//                     var idFind = document.getElementById(indices[c]).innerHTML = userGuess ;
//                     correct[c] = userGuess; 
//                     console.log("CORRECT: " + correct); 
//                     console.log("fingers crossed");
//                     // winCheck();
//                 }
           
// }
                
console.log("Made it to end of function");

};
