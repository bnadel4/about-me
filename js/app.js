'use strict';

// user name

var userName = prompt('What\'s your name?');

if(!userName) {
  alert('wuts ur name br0');
  userName = prompt('What\'s your name?');
}

console.log('USERNAME', userName);

alert('Hello ' + userName + ' welcome to my about me page!'); 

// Question 1

var metResponse = prompt('Have we met before?').toLowerCase();

if(metResponse === 'yes' || metResponse === 'y') {
  alert('I don\'t doubt it ' + userName + '!');
}
console.log('Have we met?', metResponse);

if(metResponse === 'no' || metResponse === 'n') {
  alert('Wait why you on my site then? ' + userName + '?');
} 

// Question 2

var doyoulikemystyleResponse = prompt('Do you like my style?').toLowerCase();

if(doyoulikemystyleResponse === 'yes' || doyoulikemystyleResponse === 'y') {
  alert('I like your style too ' + userName);
}

if(doyoulikemystyleResponse === 'no' || doyoulikemystyleResponse === 'n') {
  alert('Sashay away...');
}
console.log('Do you like my style?', doyoulikemystyleResponse);

// Question 3

var antmResponse = prompt('Do you have what it takes to becomes americas next top model?').toLowerCase();

if(antmResponse === 'yes'|| antmResponse ==='y') {
  alert('haha bullshit ' + userName + '!');
}

if(antmResponse === 'no' || antmResponse === 'n') {
  alert('I believe in you ' + userName + '!');
}

console.log('Do you have what it takes to become americas next top model?', antmResponse);

// Question 4

var hairsprayResponse = prompt('Have you seen my hairspray babe?').toLowerCase();

if (hairsprayResponse === 'yes' || hairsprayResponse === 'y') {
  alert('Hmmmm I dont see it ' + userName + ' let me use yours babe.');
}

if (hairsprayResponse === 'no' || hairsprayResponse === 'n') {
  alert('Okay ' + userName + ' let me just use yours babe.');
}

console.log('Have you seen my hairspray babe?', hairsprayResponse);

//Question 5

var hairlookgoodResponse = prompt('Does my hair look good now?').toLowerCase();

if (hairlookgoodResponse === 'yes' || hairlookgoodResponse === 'y') {
  alert('Yeah right babe I look like a 90s Ben Stiller clone');
}


if (hairlookgoodResponse === 'no' || hairsprayResponse === 'n') {
  alert('Babe this hairspray has no hold!');
}

console.log('Does my hair look good now?', hairlookgoodResponse);
// this hairspray has no hold
// i look like crap