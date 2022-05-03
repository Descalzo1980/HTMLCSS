"use strict";

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation () {
    const elem = document.querySelector('.car');
    let pos = 0;
    const id = setInterval(frame,10);
    function frame (){
        if (pos == 700){
            clearInterval(id);
        }else{
            pos++;
            elem.style.right = pos + "px";
        }
    }
}

btn.addEventListener('click', myAnimation);
