let result_div = document.querySelector(".result");
const rock_button = document.getElementById("r");
const paper_button = document.getElementById("p");
const scissors_button = document.getElementById("s");
let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

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

// if (typeof module !== 'undefined' && module.exports) {
//   module.exports = RockPaperScissors;
// }


