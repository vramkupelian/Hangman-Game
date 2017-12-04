
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
        var theWord = wordPool[Math.floor(Math.random() * wordPool.length)];

// This should split word into array with each letter being an index
    var splitWord = theWord.split("");
    var splitLength = splitWord.length;
    
    var lastDivTiles;
    //HOPEFULLY, splits from array into divs
    for (var w = 0; w < splitLength; w++) {
        lastDivTiles = document.createElement("div");
        lastDivTiles.id = w; 
        lastDivTiles.className = "tiles";
        lastDivTiles.innerHTML = '-';
        document.body.appendChild(lastDivTiles);
    }
    

    //image stuff
    var img = new Image();
     var div = document.getElementById("photo-div");
    //  img.onload = function() {
    //    div.appendChild(img);
    //  };

        img.onload = function() {
        div.innerHTML += '<img src="'+img.src+'" />'; 
      };
    img.src = "assets/images/" + theWord + ".jpg";


    //to check if certain text exists in the divs   if you dont find "-" in divs, game won


    
    //Starts on key up
    document.onkeyup = function (event) {
    
        // Determines which key was pressed.
        //var userGuess = event.key;
        
        //try to convert caps into lowercase
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
console.log(theWord);

//to find indices of all occurrences of a letter and puts index of each occurrence in array
var indices = [];
for(var a = 0; a < splitLength; a++){
    if(splitWord[a]===userGuess) {
        indices.push(a);
    console.log("Pushing into indices");      
    }
}

for(b = 0; b < splitLength; b++){

    if(splitWord[b]===userGuess){
        if(lastDivTiles.id===indices[b])
       // lastDivTiles.innerHTML = userGuess;
    console.log("let's see");
    }    
}

//If user's guess is in the word
if(splitWord.includes(userGuess)){
    
                for(var i=0; i < splitLength; i++){       
                console.log("you've got one");
                console.log(indices); 
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


            // you lose if you run out of guesses
            if (guessesLeft === 0){
                gamesLost = gamesLost + 1;
                document.getElementById("games-lost").innerHTML=gamesLost;   
            }

            //replaces letter but "Uncaught TypeError: Cannot set property 'innerHTML' of null
            //at HTMLDocument.document.onkeyup"
            for(c = 0 ; c < splitLength ; c++){
            var idFind = document.getElementById(indices[c]).innerHTML = userGuess ;
            console.log("fingers crossed");
}
                
console.log("Made it to end of function");
}
