var hangman = {
    wordBank: ["lynch", "noose","hangman", "dangling", "executioner", "gallows", "outlaw", "gunslinger"],
    Wins: 0, 
    remGuesses: 15, 
    userInput: [], 
    currentWord: [], 
    currentGuess: [], 
    lettersGuessed: [], 
    initialize: function(x) {
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
        this.lettersGuessed = hangman.lettersGuessed.splice(0, hangman.lettersGuessed.length);

        console.log(hangman.currentWord)

        var matchKey = function(arr) {
            document.onkeydown = function(event){
            hangman.userInput.push(event.key);
            //TEST ZONE BEGIN
            // console.log(hangman.userInput[hangman.userInput.length - 1])
            // TEST ZONE END    
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
        // function appendToLG() {
        //     // method that pushes key pressed into lettersGuessed if it's not matched to the word 
        // }
        
        // incWins(hangman.currentGuess)

        // var decRemGuesses = function(arr) {
        //     document.onkeydown = function(event){
        //         hangman.userInput.push(event.key);   
        //             for (var i = 0; i < arr.length; i++) {
        //                 if (arr[i] !== hangman.userInput[hangman.userInput.length - 1]) {
        //                      hangman.remGuesses-- 
        //                      break; 
        //                     console.log(hangman.remGuesses)
        //                 }
        //             }
        //         }
        //     }
        // decRemGuesses(hangman.currentWord); 
    }
}

// var incWins = function (arr) {
//     // Increment wins if the current word is equal to the current guess
//     if (arr == hangman.currentWord) {
//         Wins++;    
//         console.log(hangman.Wins)
//     }
// }




hangman.initialize(); 
hangman.gamePlay(); 


//console.log(hangman.userInput[hangman.userInput.length - 1])



