var hangman = {
    Wins: 0, 
    remGuesses: 15, 
    words: [],
    currentWord: [], 
    lettersGuessed: [], 
    matchKey: function(x) {
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