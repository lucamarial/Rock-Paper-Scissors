# Rock-Paper-Scissors application
* Created by Luca Lobacher 
* Deployed with [Netlify](https://rps-lm.netlify.com/)
* Tested with npm

## What the code does
The code is supposed to deliver a web-based application where you can play rock-paper-scissors against a computer. You can choose between Rock, Paper or Scissor and the computer will make a random choice.

## Main principles of the game
Rock vs Paper -> Paper wins  
Rock vs Scissors -> Rock wins  
Paper vs Scissor -> Scissor wins  

## Dependencies
Vanilla JavaScript  
NodeJS  
Chai  
e2e_training_wheels  

## SetUp
* Initialize npm
* Install packages through running the following command in your terminal:
```
npm i e2e_training_wheels --save-dev
```
* Use the automatic setup with:
```
node ./node_modules/e2e_training_wheels/dist/install.js
```
```
npm link
```
* You should get passing tests if everything is set up properly after running:
```
npm run test
```

## License
MIT-license

## User Stories
```
As a programmer  
In order to produce good quality code  
I want to work in a test driven way and test my code  
```
```
As a user  
To be able to play the rock-paper-scissor game  
I would like to access the game trough a website  
```
```
As a user  
In order to play the game  
I would like to choose between Rock, Paper or Scissors  
```
```
As a user  
To play the game  
I would like to play against the computer  
```
```
As a user  
If I play rock and the computer plays scissors  
I should win the game and I should lose if the choices were opposite  
```
```
As a user  
If I play paper and the computer plays rock  
I should win the game and I should lose if the choices were opposite  
```
```
As a user  
If I play scissors and the computer plays paper  
I should win the game and I should lose if the choices were opposite  
```
```
As a user  
After I made my decision  
I would like to see the computer's choice and an output of who won  
```

## References
Writing my code I got inspired by [freeCodeCamp.org](https://www.youtube.com/watch?v=jaVNP3nIAv0) and a post on [codecademy](https://www.codecademy.com/forum_questions/50be9a6f9f1fcd5cb60000dc).