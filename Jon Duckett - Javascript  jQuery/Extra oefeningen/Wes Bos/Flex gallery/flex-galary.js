
// 9: selecteer panels en maak function om de class 'open'en 'open-ativ'toe te voegen
const panels = document.querySelectorAll( '.panel');

function toggleOpen() {
    // console.log('Hello');
    this.classList.toggle('open');
}

//12: normaal:  this.classList.toggle('open-active'), maar er zijn meerdere events en transitions 
// eerst de propertyname vd event openen in de console
function toggleActive(e) {
    console.log(e.propertyName);
    // 12: flex-grow en flex-size veranderen
    //13: selecteren flex-grow als prop name
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

//10: voor iedere panel maak een foreach function en voeg een addEventListener 'click' toe
panels.forEach(panel =>panel.addEventListener('click', toggleOpen));
//11: voor tranform-effecten tekst onder en beneden check transitionend event in niuewe function toggleActive
panels.forEach(panel =>panel.addEventListener('transitionend', toggleActive));

