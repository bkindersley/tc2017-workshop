//define a dictionary of words
//we're using a structure called an ARRAY
//where each letter is separate
var words = [
  ['a','p','p','l','e'],
  ['r','i','v','e','r'],
];

//there are 6 steps:
//0: empty
//1: head
//2: body
//3: arm
//4: arm
//5: leg
//6: leg
const ALLOWED_TRIES = 6;

//this is part of the set-up
//to make sure everything loads correctly
jQuery(document).ready(function(){

  //randomly choose word from the dictionary

  //build an array of underscores from chosen word
  //such that each underscore corresponds to a letter
    //create a new array

    //go through each letter of word and add an
    //underscore to the new array


  //define variables used to track
  //the number of blanks left
  //the number of mistakes made

  //display the underscores

  //what happens when the submit button is clicked
  sumbitLetter = function(){
    //read letter from text box

    //check if the letter is in word
      //go through each letter of word
        //compare the sumbitted letter to the current letter
          //they are equal:
            //update underscore array

            //update number of blanks

            //we know that the letter is in the word

    //guessed right:
      //update the displayed word

      //all letters guessed:
        //win!

      //otherwise:

    //guessed wrong:
      //update mistakes counter

      //still have some tries left:
        //update image

      //no tries left:
        //lose :(
  };
})
