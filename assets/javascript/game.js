
// These are all the options
var guessChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var guessesLeft = 7;

//List of possible words: US presidents , no repeats i.e. Bush comes up once
var wordPool = ["Jefferson","Washington","Obama","Truman","Eisenhower","Lincoln","Jackson","Trump","Bush","Clinton","Reagan",
"Nixon","Carter","Ford","Johnson","Roosevelt","Hoover","Coolidge",
"Harding","Wilson","Taft","McKinley","Cleveland","Harrison",
"Arthur","Garfield","Hayes","Grant","Buchanan","Pierce","Fillmore",
"Taylor","Polk","Tyler","Van Buren","Adams","Monroe","Madison",]  //38 names

// This will randomly choose the word for each game
        var theWord = wordPool[Math.floor(Math.random() * wordPool.length)];

document.onkeyup = function (event) {
    
        // Determines which key was pressed.
        var userGuess = event.key;
            
    // This should split word into array with each letter being an index
    var splitWord = theWord.split("");

    for (var i = 0; i < splitWord.length; i++){
        console.log(splitWord[i]);
      }

console.log(splitWord);



}