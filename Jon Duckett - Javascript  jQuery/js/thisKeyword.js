let javascriptLogo = document.getElementById('jsLogo');
let cppLogo = document.getElementById('cpplogo');
let tekst = document.getElementById('tekst');

let click;
function checkCorrectWidth() {
    click++; 
    if(click % 2 !== 0) {
    this.style.border = '3px solid red';
    this.width = 300;
    tekst.innerHTML = this.width;
    } else {
        this.width = 500;
    }
}

javascriptLogo.addEventListener('click', checkCorrectWidth, false);
cppLogo.addEventListener('click', checkCorrectWidth, false);


console.log('hoi');
console.log(click++);
