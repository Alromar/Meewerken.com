





const divs = document.querySelectorAll('div'); 
const buttonId = document.getElementById('buttonId');


function logText(e) {

    //stopPropagation = stop bubbling
    // e.stopPropagation();

    console.log(this.classList.value);
    
    console.log(this);
}

//bublling
//divs.forEach(div => div.addEventListener('click' , logText));

//capturing
divs.forEach(div => div.addEventListener('click' , logText, {
    capture:false,
    //stop propagation
    //'once' prop = unbind event after one = div.removeEventListener('click', logText);
    // once: true 
}));


buttonId.addEventListener('click',() => {
    console.log('Click!!!');
}, {
    //stop progatation
    once: true
})

//document.body.addEventListener('click', logText)