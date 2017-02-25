
var wg = new WordGenerator(14);


$(document).ready(function() {
    var strikes = 2;
    var correctGuesses = new Array();
    var keyPressedLetters = new Array();
   $(".controller a").on("tap",function() {
       let val = $(this).html();
       evaluate($(this), val);

   });

   $("#word").html( function() {
       var word = wg.generateWord;
       var __   = ' ';
       for (var i = 0; i < word.length; i++) {
           __ += '__ ';
           correctGuesses.push(false);
       }
       return __;
   });

    $(document).keydown(function(e)
    {
        var key = String.fromCharCode(e.charCode || e.which);  // gives capital letter
        e.preventDefault();
        if ( 65 > e.which || e.which > 90) { //a..z
            return false;
        } else {
            keyHasBeenUsed(keyPressedLetters, key);
            evaluate(false, key);
            keyPressedLetters.push(key);
        }
    });

    function keyHasBeenUsed(keyPressedLetters, key) {
        for (var i = 0; i < keyPressedLetters.length; i++) {
            if (key === keyPressedLetters[i]) {
                console.log("you already used that key");
                return true;
            }
        }
        return false;
    }

    function evaluate(context, val) {
        var v = "#";
        v += val;
        if ( context === false) {
            var a = $(".controller a");
            for (var i = 0; i < a.length; i++) {
                if (a[i].getAttribute('href') === v) {
                    context = a[i];
                    context.setAttribute("style","display:none");
                    break;
                }
            }
        } else if (context !== null && context !== false) {
            context.attr("style","display:none");
        }

        switch(val) {
            case 'A':
                // check word for letter build string display it regaurdless if new letter is found
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}  
                break;
            case 'B':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}  
                break;
            case 'C':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}  
                break;
            case 'D':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'E':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'F':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'G':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'H':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'I':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'J':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'K':
                // to do
                break;
            case 'L':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'M':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'N':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'O':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'P':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'Q':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'R':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'S':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}  
                break;
            case 'T':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'U':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'V':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'W':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'X':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'Y':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'Z':
                if (!keyHasBeenUsed(keyPressedLetters, val)) {    keyPressedLetters.push(val) ;    attemptGuess(val.toLowerCase());}   
                break;
            case 'Start New Game': // assuming user started new game
                console.log("starting new game");
                window.location.reload();
                break;
        }
    }

    function log(key) {
        console.log(key);
    }

    function attemptGuess(ch) {
       // returns __ __ A __ __ 
       var guessIsCorrect = false;
       var str = ' ';
       for (var i = 0; i < wg.word.length; i++) {
           console.log(wg.word.charAt(i))
           if ( ch === wg.word.charAt(i) && correctGuesses[i] === false) {
               str += wg.word.charAt(i)+' ';
               correctGuesses[i] = true;
               guessIsCorrect = true;
           } else if (correctGuesses[i] === true) {
               str += wg.word.charAt(i)+' ';
           } else {
               str += '__ ';
           }
       }

       if (guessIsCorrect === false) {
           // change image
           strikes++;
           $("#hangman").attr("src","pics/"+strikes+".jpg");
       } else if (isWin(correctGuesses)) {
           var a = $(".controller a");
            for (var i = 0; i < a.length - 1; i++) {
                a[i].setAttribute("style","display:none");            
            }
            alert("WINNER!");
            //window.location.reload();
       }

       $("#word").html(str);

        if (strikes == 8) { // 8 - 2 + 1 chances = 7 chances
           var a = $(".controller a");
            for (var i = 0; i < a.length - 1; i++) {
                a[i].setAttribute("style","display:none");            
            }
           $("#word").html(wg.word);
           alert("GAME OVER!  The word is "+wg.word);
           return false;
           //window.location.reload();
       }
   }

   function isWin(guesses) {
       for (var i = 0; i < guesses.length; i++) {
           if(guesses[i] === false) {
               return false;
           }
       }
       return true;
   }

});
