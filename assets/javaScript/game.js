var hangman = {
    wordBank: ["lynch", "noose","hangman", "dangling", "executioner", "gallows", "outlaw", "gunslinger"],
    Wins: 0, 
    remGuesses: 15, 
    userInput: [], 
    currentWord: [], 
    currentGuess: [], 
    lettersGuessed: [], 
    initialize: function() {
        if (document.getElementById("startedContainer").style.visibility !== "hidden" || hangman.remGuesses === 0) {
            document.getElementById("startedContainer").style.visibility = "hidden";
            this.wins = 0;
            document.getElementById("wins").innerHTML = '  ' + this.wins;
            this.remGuesses = 15; 
            document.getElementById("remGuesses").innerHTML = '  ' + this.remGuesses;    

            var placeHolder = function(arr) {
                for (var i = 0; i < arr.length; i++){
                    hangman.currentGuess.push("__ "); 
                }
                return hangman.currentGuess; 
            }
    
            hangman.currentWord = hangman.wordBank[Math.floor(Math.random() * hangman.wordBank.length)].split('');
            
            document.getElementById("currWord").innerHTML = '  ' + placeHolder(hangman.currentWord).toString().replace(/,/g, '');
        }
    },
    gamePlay: function() {

        console.log(hangman.currentWord)
        console.log(hangman.userInput[hangman.userInput.length - 1])
        console.log(hangman.currentWord[0]) 
        

        var matchKey = function(arr) {
            hangman.currentGuess[i] = hangman.userInput[hangman.userInput.length - 1]; 
            document.getElementById("currWord").innerHTML = '  ' + hangman.currentGuess.toString().replace(/,/g, '');
            }
            
        var appendToLG = function(arr) {
            hangman.lettersGuessed.push(hangman.userInput[hangman.userInput.length - 1])
            // console.log(hangman.lettersGuessed)
            document.getElementById("lettersGuessed").innerHTML = '  ' + hangman.lettersGuessed.toString();
        }

        var decRemGuesses = function(arr) {
            hangman.remGuesses--  
            // console.log(hangman.remGuesses)
            document.getElementById("remGuesses").innerHTML = '  ' + hangman.remGuesses;
        }

        var incWins = function (arr) {
            hangman.Wins++  
            document.getElementById("wins").innerHTML = '  ' + hangman.Wins;             
        }
        // incWins(hangman.currentGuess)  
        
        for (var i = 0; i < hangman.currentWord.length; i++) {
            console.log(hangman.currentWord[i] === hangman.userInput[hangman.userInput.length - 1])
            if (hangman.currentWord[i] === hangman.userInput[hangman.userInput.length - 1]) {
                matchKey(hangman.currentWord); 
            }         
        }  

        for (var i = 0; i < hangman.currentWord.length; i++) {
            console.log(hangman.currentWord[i] !== hangman.userInput[hangman.userInput.length - 1])
            if (hangman.currentWord[i] !== hangman.userInput[hangman.userInput.length - 1]) {
                appendToLG(hangman.currentGuess);
                decRemGuesses(hangman.currentGuess);  
                break;  
            } 
            break; 
        }
    }
}



document.onkeypress = function(event){
    hangman.userInput.push(event.key);
    hangman.initialize();   
    hangman.gamePlay();
}








