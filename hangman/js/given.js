randomIndex = function(n){
  return Math.floor((Math.random() * n));
};

updateDisplay = function(curr_word){
  $('#word').text(curr_word.join(" "));
};

getSubmittedLetter = function(){
  letter = $('#letter-entry').val().toLowerCase();
  $('#letter-entry').val("");
  return letter;
};

endGame = function(state){
  $('#letter-entry').attr("disabled", "disabled");
  $('#letter-submit').attr("disabled", "disabled");
  if (state === "win"){
    displayMessage("Yay! You won!");
  }
  if (state === "lose"){
    displayMessage("Oh no! You lost!");
  }
};

newImage = function(i){
  $('.hangman').attr("src", ".\\img\\hangman"+i+".png");
};

displayMessage = function(msg){
  var pgph = $('<p class = "message">' + msg + '</p>');
  $('#message-container').append(pgph);
}

isAlphabetic(str){
  return str.match(/[a-z]/i);
}
