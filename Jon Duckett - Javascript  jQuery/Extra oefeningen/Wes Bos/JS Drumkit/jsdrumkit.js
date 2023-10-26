
//1: listening to keydown event

//10: function playSound

function playSound(e) {
        // console.log(e.keyCode);
           //2: checken audio elements en backticks `gebruiken om een variabele te maken van de value in de data prop `
           const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
           //7: key selecteren voor animatie
           const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
           //3: checken of het audio element en de correcte data-key value wordt geselecteerd
           //4: als er geen auddio-element is dan stop functie
           if (!audio) return;
           //6: om te kunnen herhalen met afspelen, naar startijd terugzetten
           audio.currentTime = 0;
           //5: om af te spelen
           audio.play();
           //error bij herhaliend druk
           //6: key class laten zien: 
           // console.log(key);
           key.classList.add('playing');
           console.log(key)
}





// setTimeout(function() {




//7: remove transition
// }, 0.07)
//introductie: JS heeft ook een transition end event listener
//9: function remove transition
function removeTransition(e) {
    console.log(e.propertyName); 
    // console.log(e);
    if (e.propertyName !== 'transform') return; //overslaan als de property niet 'transform'is
    console.log(e.propertyName);
    // console.log(this);
   
    this.classList.remove('playing');
}
//keys.addEventListener('transitionend') => niet bij een array van elementen;
//Moet forEach;
//8: for each loop over keys met eventlistener methode en function
const keys = document.querySelectorAll('.key');

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

//11: function playSound koppelen aan keydown event
window.addEventListener('keydown', playSound); 






