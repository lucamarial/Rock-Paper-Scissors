function RockPaperScissors(choiceOne) {
  const choiceTwo = computerChoice();
  
  if(choiceOne === choiceTwo){
    return tie(choiceOne, choiceTwo)
  };
  
  if(choiceOne === 'rock'){
    if(choiceTwo === 'scissors'){
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

  if(choiceOne === 'scissors'){
    if(choiceTwo === 'paper'){
      return win(choiceOne, choiceTwo)
    }
    else{
      return lose(choiceOne, choiceTwo)
    }
  }
};

function computerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, computer) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_div.innerHTML = `${user} beats ${computer}. You win!`
}

function lose(user, computer) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_div.innerHTML = `${computer} beats ${user}. You lose!`
}

function tie(user, computer) {
  result_div.innerHTML = "The result is a tie!"
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = RockPaperScissors;
  module.exports = computerChoice;
  // module.exports = win;
  // module.exports = lose;
  // module.exports = tie;
}