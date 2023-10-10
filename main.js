

let wrapper = document.querySelector('.wrapper')

// creating elements 
let wh_holder = document.createElement('div')
let h1 = document.createElement('h1');
let h2 = document.createElement('h2');


h1.textContent = 'Your Screen Resolution is';
wrapper.appendChild(wh_holder)
wh_holder.appendChild(h1)
wh_holder.appendChild(h2)


function updateResolution(){
    let w = window.innerWidth;
    let h = window.innerHeight;
    h2.textContent = `${w} X ${h}`;
}

updateResolution();

window.addEventListener('resize', updateResolution)