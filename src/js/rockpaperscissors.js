let result_div = document.querySelector(".result");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");


function computerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

const main = () => {
  rock_button.addEventListener('click', function() {
    RockPaperScissors("rock");
  })

  paper_button.addEventListener('click', function() {
    RockPaperScissors("paper");
  })

  scissors_button.addEventListener('click', function() {
    RockPaperScissors("scissors");
  })
}
console.log(main())

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

