

let wrapper = document.querySelector('.wrapper')
// let WH = document.querySelector('.W-H');
let w = window.innerWidth;
let h = window.innerHeight;

// creating elements 
let wh_holder = document.createElement('div')
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');

h1.textContent = 'Your Screen Resolution is';
h2.textContent = `${w} X ${h}`;



wrapper.appendChild(wh_holder)
wh_holder.appendChild(h1)
wh_holder.appendChild(h2)

