// 'use strict';

// // user name

// var userName = prompt('What\'s your name?');

// if(!userName) {
//   alert('wuts ur name br0');
//   userName = prompt('What\'s your name?');
// }

// console.log('USERNAME', userName);

// alert('Hello ' + userName + ' welcome to my about me page!'); 

// // Question 1

// var metResponse = prompt('Have we met before?').toLowerCase();

// if(metResponse === 'yes' || metResponse === 'y') {
//   alert('I don\'t doubt it ' + userName + '!');
// }
// console.log('Have we met?', metResponse);

// if(metResponse === 'no' || metResponse === 'n') {
//   alert('Wait why you on my site then? ' + userName + '?');
// } 

// // Question 2

// var doyoulikemystyleResponse = prompt('Do you like my style?').toLowerCase();

// if(doyoulikemystyleResponse === 'yes' || doyoulikemystyleResponse === 'y') {
//   alert('I like your style too ' + userName);
// }

// if(doyoulikemystyleResponse === 'no' || doyoulikemystyleResponse === 'n') {
//   alert('Sashay away...');
// }
// console.log('Do you like my style?', doyoulikemystyleResponse);

// // Question 3

// var antmResponse = prompt('Do you have what it takes to becomes americas next top model?').toLowerCase();

// if(antmResponse === 'yes'|| antmResponse ==='y') {
//   alert('haha bullshit ' + userName + '!');
// }

// if(antmResponse === 'no' || antmResponse === 'n') {
//   alert('I believe in you ' + userName + '!');
// }

// console.log('Do you have what it takes to become americas next top model?', antmResponse);

// // Question 4

// var hairsprayResponse = prompt('Have you seen my hairspray babe?').toLowerCase();

// if (hairsprayResponse === 'yes' || hairsprayResponse === 'y') {
//   alert('Hmmmm I dont see it ' + userName + ' let me use yours babe.');
// }

// if (hairsprayResponse === 'no' || hairsprayResponse === 'n') {
//   alert('Okay ' + userName + ' let me just use yours babe.');
// }

// console.log('Have you seen my hairspray babe?', hairsprayResponse);

// //Question 5

// var hairlookgoodResponse = prompt('Does my hair look good now?').toLowerCase();

// if (hairlookgoodResponse === 'yes' || hairlookgoodResponse === 'y') {
//   alert('Yeah right babe I look like a 90s Ben Stiller clone');
// }


// if (hairlookgoodResponse === 'no' || hairsprayResponse === 'n') {
//   alert('Babe this hairspray has no hold!');
// }

// console.log('Does my hair look good now?', hairlookgoodResponse);
// // this hairspray has no hold
// // i look like crap

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

// var guessesRemaining = 4;

// while(guessesRemaining > 0) {
//   var yearResponse = parseInt(prompt('What year was i born in?')); 
//   guessesRemaining--;

//   if (yearResponse < 1993) {
//     alert('im a little younger...');
//   }

//   if (yearResponse > 1993) {
//     alert('haha thats the botox talkin');
//   }

//   if (yearResponse === 1993) {
//     alert('thats right!');
//     console.log(yearResponse);
//     break;
    
//   }

// }


// QUESTION 7

// As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.


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




