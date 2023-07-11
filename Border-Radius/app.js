//DOM Elements

const shapeElem = document.querySelector('.shape');
const leftElem = document.getElementById('left');
const topElem = document.getElementById('top');
const rightElem = document.getElementById('right');
const bottomElem = document.getElementById('bottom');
const rangerElem = document.getElementById('ranger');
const codeElem = document.querySelector('.code');


function leftSlider(event){
    //go furthur only if id is left
    if (event.target.id !== `left`) return;

    //when #left is checked
    if(event.target.checked){
        ranger(leftElem);
    }
}

function ranger(){
    let rangerValue = rangerElem.value;
    leftElem.style.top = `${rangerValue}%`;
}

document.addEventListener('change', ranger);