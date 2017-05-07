//define a dictionary of words
//we're using a structure called an ARRAY
//where each letter is separate
var words = [
  ['a','p','p','l','e'],
  ['r','i','v','e','r'],
];

//i chose to have 6 steps:
//0: empty
//1: head
//2: body
//3: arm
//4: arm
//5: leg
//6: leg
const ALLOWED_TRIES = 6;

//this line is part of the set-up
//to make sure everything loads correctly
jQuery(document).ready(function(){

  //randomly choose word from the dictionary
  var word_i = randomIndex(words.length);
  var word = words[word_i];//the randomly chosen word

  //build an array of underscores from chosen word
  var curr_word = [];//tracks the current state of the guesses
  //go through each letter of word and add an
  //underscore to curr_word
  for (i=0; i < word.length; i++){
    curr_word.push('_');
  }

  var numBlanksLeft = word.length;//track how many letters are guessed

  var curr_try = 0;//track how many guesses are used

  //display the underscores
  updateDisplay(curr_word);

  //what happens when the submit button is clicked
  sumbitLetter = function(){
    //read letter from text box
    var letter = getSubmittedLetter();

    //check if the letter is in word
    var isInWord = false;//track if letter is in word
    //go through each letter of word
    for (i=0;i<word.length;i++){
      //compare the sumbitted letter to the current letter
      if (letter == word[i]){
        //update curr_word
        curr_word[i] = letter;
        //update numBlanksLeft
        numBlanksLeft--;
        //set isInWord true
        isInWord = true;
      }
    }
    //guessed right
    if (isInWord){
      //update the displayed word
      updateDisplay(curr_word);

      //all letters guessed:
      if(numBlanksLeft==0){
        //win!
        endGame("win");
      }
      //otherwise:
    }
    //guessed wrong
    else {
      //update try counter
      curr_try++;
      //still have some tries left:
      if(curr_try <= ALLOWED_TRIES){
        //update image
        newImage(curr_try);
      }
      //no tries left:
      else{
        //lose :(
          endGame("lose");
      }
    }
  };
})
