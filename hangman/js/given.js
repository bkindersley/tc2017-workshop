randomIndex = function(n){
  return Math.floor((Math.random() * n));
};

updateDisplay = function(){
  $('#word').text(curr_word.join(" "));
};

getSubmittedLetter = function(){
  letter = $('#letter-entry').val().toLowerCase();
  $('#letter-entry').val("");
  return letter;
};

endGame = function(state){
  window.location.replace("./"+state+".html");
};

newImage = function(i){
  $('.hangman').attr("src", ".\\img\\hangman"+i+".png");
};
