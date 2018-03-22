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

if(doyoulikemystyleResponse === 'yes' || doyoulikemystyleResponse === "y") {
  alert('I like your style too' + userName);
}

if(doyoulikemystyleResponse === 'no' || doyoulikemystyleResponse === "n") {
  alert('Sashay away...');
}
console.log('Do you like my style?', doyoulikemystyleResponse);
