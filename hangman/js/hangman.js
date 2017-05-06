//define a dictionary of words
//we're using a structure called an ARRAY
//where each letter is separate
var words = [
  ['a','p','p','l','e'],
  ['r','i','v','e','r'],
];

const ALLOWED_TRIES = 6;

//this line is part of the set-up
//to make sure everything loads correctly
jQuery(document).ready(function(){

  //randomly choose word from the dictionary
  var word_i = randomIndex(words.length);
  var word = words[word_i];

  //build underscore string
  var curr_word = [];
  //go through each letter of word and add an
  //underscore to curr_word
  for (i=0; i < word.length; i++){
    curr_word.push('_');
  }
  //to track how many letters are guessed
  var progress = word.length;

  //to track how many guesses are used
  var curr_try = 0;

  //display
  updateDisplay();

  //what happens when submit button clicked
  sumbitLetter = function(){
    //read letter from text box
    var letter = getSubmittedLetter();
    //check valid

    //check guessed

    //check in word
    //to track if letter is in word
    var isIn = false;
    //go through each letter of word
    for (i=0;i<word.length;i++){
      //compare the letter to letter
      if (letter == word[i]){
        //update curr_word
        curr_word[i] = letter;
        //update progress
        progress--;
        //set isIn true
        isIn = true;
      }
    }
    //guessed right
    if (isIn){
      updateDisplay()

      //wait a little
      setTimeout(function() {
        //all letters guessed
        if(progress==0){
          endGame("win");
        }
      }, 500);
    }
    //guessed wrong
    else {
      //update try counter
      curr_try++;
      //still have some tries left
      if(curr_try <= ALLOWED_TRIES){
          newImage(curr_try);
      }
      else{
          endGame("lose");
      }
    }
  };
})
