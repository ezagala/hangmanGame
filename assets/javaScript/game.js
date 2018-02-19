var hangman = {
    wordBank: ["lynch", "noose","hangman", "dangling", "executioner", "gallows", "outlaw", "gunslinger"],
    Wins: 0, 
    remGuesses: 15, 
    userInput: [], 
    currentWord: [], 
    currentGuess: [], 
    lettersGuessed: [], 
    initialize: function() {
        document.onkeypress = function(event){
            if (document.getElementById("startedContainer").style.visibility !== "hidden" || this.remGuesses === 0) {
                document.getElementById("startedContainer").style.visibility = "hidden";
                this.wins = 0;
                document.getElementById("wins").innerHTML = '  ' + this.wins;
                this.remGuesses = 15; 
                document.getElementById("remGuesses").innerHTML = '  ' + this.remGuesses;    
            }
        }
    },
    gamePlay: function() {

        var placeHolder = function(arr) {
            for (var i = 0; i < arr.length; i++){
                hangman.currentGuess.push("__ "); 
            }
            return hangman.currentGuess; 
        }

        this.currentWord = hangman.wordBank[Math.floor(Math.random() * hangman.wordBank.length)].split('');
        document.getElementById("currWord").innerHTML = '  ' + placeHolder(this.currentWord).toString().replace(/,/g, '');

        console.log(hangman.currentWord)

        var matchKey = function(arr) {
            document.onkeydown = function(event){
            hangman.userInput.push(event.key);  
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] === hangman.userInput[hangman.userInput.length - 1]) {
                        hangman.currentGuess[i] = hangman.userInput[hangman.userInput.length - 1]; 
                        console.log(hangman.currentGuess)
                        document.getElementById("currWord").innerHTML = '  ' + hangman.currentGuess.toString().replace(/,/g, ''); 
                    } 
                }
            }
        }
        matchKey(hangman.currentWord); 

        var appendToLG = function(arr) {
            document.onkeydown = function(event){
                hangman.userInput.push(event.key);
                for (var i = 0; i < arr.length; i++) {
                    if (!arr[i] == hangman.userInput[hangman.userInput.length - 1]) {
                        hangman.lettersGuessed.push(hangman.userInput[hangman.userInput.length - 1])
                        console.log(hangman.lettersGuessed)
                        document.getElementById("lettersGuessed").innerHTML = '  ' + hangman.lettersGuessed.toString(); 
                        break; 
                    } 
                }
            }
        }
        appendToLG(hangman.currentGuess); 

        var decRemGuesses = function(arr) {
            document.onkeydown = function(event){
            hangman.userInput.push(event.key);   
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] != hangman.userInput[hangman.userInput.length - 1]) {
                        hangman.remGuesses--  
                        console.log(hangman.remGuesses)
                        document.getElementById("remGuesses").innerHTML = '  ' + hangman.remGuesses;
                        break; 
                    }
                }
            }
        }
        decRemGuesses(hangman.currentGuess); 

        var incWins = function (arr) {
            document.onkeydown = function(event){
                hangman.userInput.push(event.key);   
                    for (var i = 0; i < arr.length; i++) {
                        if (arr[i] != hangman.userInput[hangman.userInput.length - 1]) {
                            hangman.Wins++  
                            console.log(hangman.Wins)
                            document.getElementById("wins").innerHTML = '  ' + hangman.Wins; 
                            break; 
                        }
                    }
                }
         }
         incWins(hangman.currentGuess)
    }
}

hangman.initialize(); 
hangman.gamePlay(); 





