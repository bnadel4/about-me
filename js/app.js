'use strict';

var userName = prompt('What\'s your name?');

if(!userName) {
  alert('wuts ur name br0');
  userName = prompt('What\'s your name?');
}

console.log('USERNAME', userName);

alert('Hello ' + userName + ' welcome to my about me page!'); 

var metResponse = prompt('Have we met before?');

if(metResponse === 'yes') {
  alert('I don\'t doubt it ' + userName + '!');
}
console.log('Have we met?', metResponse);

if(metResponse === 'no') {
  alert('Wait why you on my site then? ' + userName + '?');
} 

