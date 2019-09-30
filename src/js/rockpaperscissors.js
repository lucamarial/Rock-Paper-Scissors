function RockPaperScissors(choiceOne) {
  const choiceTwo = computerChoice();
  
  if(choiceOne === choiceTwo){
  return result_div.innerHTML = "The result is a tie!"
  };
  
  if(choiceOne === 'rock'){
    if(choiceTwo === 'scissor'){
    return win(choiceOne, choiceTwo)
    }
    else{
      return lose(choiceOne, choiceTwo)
    }
  };

  if(choiceOne === 'paper'){
    if(choiceTwo === 'rock'){
      return win(choiceOne, choiceTwo)
    }
    else{
      return lose(choiceOne, choiceTwo)
    }
  };

  if(choiceOne === 'scissor'){
    if(choiceTwo === 'paper'){
      return win(choiceOne, choiceTwo)
    }
    else{
      return lose(choiceOne, choiceTwo)
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RockPaperScissors;
}