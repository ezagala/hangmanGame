var hangman = {
    Wins: 0, 
    remGuesses: 15, 
    words: [1, 2, 3],
    currentWord: [], 
    lettersGuessed: [], 
    wordBank: ["lynch", "noose","hangman", "dangling", "executioner", "gallows", "outlaw", "gunslinger"], 
    initialize: function(x){
        hangman.wins = 0;
        hangman.remGuesses = 15; 
        hangman.currentWord = hangman.wordBank[Math.floor(Math.random() * hangman.wordBank.length)];
        hangman.lettersGuessed = hangman.lettersGuessed.splice(0, hangman.lettersGuessed.length);
    },
    matchKey: function(arr) {
        // method that matches key pressed w/ letter in curent word

    }, 
    appendToLG: function(x) {
        // method that pushes key pressed into lettersGuessed if it's not matched to the word 
    }, 
    incWins: function(x) {
        // if the key is matched...
        Wins++;    
    }, 
    decRemGuesses: function(x) {
        // if the letter isn't matched... 
        remGuesses--; 
    }
}

if (document.getElementById("startedContainer").style.display !== "none") {
    document.onkeypress = function(evt){
        hangman.initialize();
        document.getElementById("startedContainer").style.display = "none";
        document.getElementById("wins").innerHTML = ' ' + hangman.wins; 
        document.getElementById("remGuesses").innerHTML = ' ' + hangman.remGuesses;    
    }
}



