var hangman = {
    Wins: 0, 
    remGuesses: 15, 
    currentWord: [], 
    currentGuess: [], 
    lettersGuessed: [], 
    wordBank: ["lynch", "noose","hangman", "dangling", "executioner", "gallows", "outlaw", "gunslinger"], 
    initialize: function(x){
        //placeHolder function generates the sequence of underscores that correspond to the missing letters 
        var placeHolder = function(arr) {
            for (var i = 0; i < arr.length; i++){
                hangman.currentGuess.push("__ "); 
            }
            return hangman.currentGuess; 
        }

        //If the targeted container is on the page or remGuesses is 0: (1) hide the startedContainer elem., (2) set and render wins, (3) set and render remaining guesses, (4) set a current word and render a string of underscores that matches the length of the current word, (5) reset letters guessed
        document.onkeypress = function(event){
            if (document.getElementById("startedContainer").style.display !== "none" || this.remGuesses === 0) {
                document.getElementById("startedContainer").style.display = "none";
                this.wins = 0;
                document.getElementById("wins").innerHTML = '  ' + this.wins;
                this.remGuesses = 15; 
                document.getElementById("remGuesses").innerHTML = '  ' + this.remGuesses;    
                this.currentWord = hangman.wordBank[Math.floor(Math.random() * hangman.wordBank.length)];
                document.getElementById("currWord").innerHTML = '  ' + placeHolder(this.currentWord).toString(); 
                this.lettersGuessed = hangman.lettersGuessed.splice(0, hangman.lettersGuessed.length);
            }
        }
    },
    gamePlay: function(x) {
        var matchKey = function(arr) {
            // If input matches a letter in currentWord: (1) replace the underscore with the guessed letter at its index
            document.onkeypress = function(event){
                var input = event.key; 
                
            }

        }
        var appendToLG = function(x) {
            // method that pushes key pressed into lettersGuessed if it's not matched to the word 
        }
        var incWins = function(x) {
            // Increment wins if the current word is equal to the current guess
            if (this.currentGuess === this.currentWord) {
                Wins++;    
            }
        }
        var decRemGuesses = function(x) {
            // if the letter isn't matched... 
            remGuesses--; 
        }
    }
}


hangman.initialize(); 
console.log(typeof hangman.currentGuess)
// hangman.gamePlay(); 




