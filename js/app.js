'use strict';

var score = 0;


// user name

var userName = prompt('What\'s your name?');

if(!userName) {
  alert('wuts ur name br0');
  userName = prompt('What\'s your name?');
}

console.log('USERNAME', userName);

alert('Hello ' + userName + ' welcome to my about me page!'); 

// Question 1

function question1() {

  var metResponse = prompt('Have we met before?').toLowerCase();

  if(metResponse === 'yes' || metResponse === 'y') {
    alert('I don\'t doubt it ' + userName + '!');
    score++; 
  }
  console.log('Have we met metResponse');

  if(metResponse === 'no' || metResponse === 'n') {
    alert('Wait why you on my site then? ' + userName + '?');
  } else {
    alert('Sorry, please answer yes or no.');
    metResponse = prompt('Have we met before?').toLowerCase();
  }
}

question1();
// // Question 2

function question2() {

  var doyoulikemystyleResponse = prompt('Do you like my style?').toLowerCase();

  if(doyoulikemystyleResponse === 'yes' || doyoulikemystyleResponse === 'y') {
    alert('I like your style too ' + userName);
    score++;
  }

  if(doyoulikemystyleResponse === 'no' || doyoulikemystyleResponse === 'n') {
    alert('Sashay away...');
  }
  console.log('Do you like my style?', doyoulikemystyleResponse);

}

question2();

// // Question 3

function question3() {

  var antmResponse = prompt('Do you have what it takes to becomes americas next top model?').toLowerCase();

  if(antmResponse === 'yes'|| antmResponse ==='y') {
    alert('haha bullshit ' + userName + '!');
  }

  if(antmResponse === 'no' || antmResponse === 'n') {
    alert('I believe in you ' + userName + '!');
    score++;
  }
}

question3();

// console.log('Do you have what it takes to become americas next top model?', antmResponse);

// // Question 4

function question4() {
  var hairsprayResponse = prompt('Have you seen my hairspray babe?').toLowerCase();

  if (hairsprayResponse === 'yes' || hairsprayResponse === 'y') {
    alert('Hmmmm I dont see it ' + userName + ' let me use yours babe.');
  }

  if (hairsprayResponse === 'no' || hairsprayResponse === 'n') {
    alert('Okay ' + userName + ' let me just use yours babe.');
    score++;
  }

  console.log('Have you seen my hairspray babe?', hairsprayResponse);
}
question4();

//Question 5

function question5() {

  var hairlookgoodResponse = prompt('Does my hair look good now?').toLowerCase();

  if (hairlookgoodResponse === 'yes' || hairlookgoodResponse === 'y') {
    alert('Yeah right babe I look like a 90s Ben Stiller clone');
  }


  if (hairlookgoodResponse === 'no' || hairlookgoodResponse === 'n') {
    alert('Babe this hairspray has no hold!');
    score++;
  }

  console.log('Does my hair look good now?', hairlookgoodResponse);
}

question5();

// this hairspray has no hold
// i look like crap

// // Question 7 NUMBERS

// for loop
// var jamieArray = [1991,1992,1993,1994,1995]; 


// console.log(jamieArray.length);

// for(var i = 0; i < jamieArray.length; i++) {
//   console.log('index' , i);
//   console.log('value' , jamieArray[i]);
  
//   var newArray = jamieArray[i] + 1; 
//   console.log('new array' , newArray);

// }


// QUESTION 6 

function question6() {

  var guessesRemaining = 4;

  while(guessesRemaining > 0) {
    var yearResponse = parseInt(prompt('What year was i born in?')); 
    guessesRemaining--;

    if (yearResponse < 1993) {
      alert('im a little younger...');
    }

    if (yearResponse > 1993) {
      alert('haha thats the botox talkin');
    }

    if (yearResponse === 1993) {
      alert('thats right!');
      console.log(yearResponse);
      score++;
      break;
      
    }

  }
}

question6();

// QUESTION 7

// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.

function question7() {
  var favoriteColors = ['red', 'green', 'blue'];

  var guessesRemainingColors = 6;

  while(guessesRemainingColors > 0) {
    
    var colorsResponse = prompt('What is one of my favorite colors?');
    console.log('colorsResponse', colorsResponse);
    guessesRemainingColors--;

    for(var i = 0; i < favoriteColors.length; i++) {
      console.log(favoriteColors[i]);
    
      if(colorsResponse === favoriteColors[i]) {
        guessesRemainingColors = -1; 
        alert('good going the correct answers were red green and blue');
        score++;
        break;
      }
    }
    if(guessesRemainingColors > 0) {
      alert('you have ' + guessesRemainingColors + ' guesses left');
    }
    if(guessesRemainingColors === 0) {
      alert('nice try red green and blue are some of my favorite colors');
    }
  }
}

question7();

function displayScore() {
  if (score < 4) {
    alert('too bod! you only got ' + score + '/7 answer right about me');
  }

  if (score >= 4) {
    alert('good job you got ' + score + '/7 correct!')
  }
    
  
}

displayScore();



