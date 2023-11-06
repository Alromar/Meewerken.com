const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector( '.plates');
//13: JSON statement 12 toevoegen aan variabele
const items = JSON.parse(localStorage.getItem('items')) || [];
//14: als je de pag ververst, blijven de items in de list aanwezig 

//15: bij refresh, wordt de checkbox-state gewist


function addItem(e) {
    // console.log('fish');
    //1:na invullen toevoegen aan menu, ververst de pagina
    //als je in de settings vd console aanvinkt 'preserve log upon navigation'
    //dan verschint pas de statement met de lik naar de local storage
    //voorkomen ververen door:
    e.preventDefault();
    //3: selecteer de form-tag met this keyword en zoek daarin naar een name-attribuut
    const text = (this.querySelector('[name=item]')).value;
    //2: gebeurt niks -> tekst uit invoerveld in object zetten
    const item = {
        // text: 'Item Name',
        text,
        done: false
    };
    // console.log(item)
    //er verschint nu een object met een boolean en de tekst

    //5: items toevoegen aan items array 
    items.push(item)
     //type array(console.table(arrayName)) in console en zie de input items in de objecten

     //10 lijst wordt gewist als de pagina ververst
     //lijst aan localstorage toevoegen
     //localStorage.setItem('items', items);
     //alleen strings opgeslagen in localstorage -> stringify met JSON
     localStorage.setItem('items', JSON.stringify(items));
     //met method JSON.parse de string omzetten in een array
     JSON.parse(localStorage.getItem('items'));





     //8: voer de function uit en gebruik ipv plates en plateslist, de arraynaam items en de variabele itemslist
    populateList(items,itemsList);
    //na toevoegen item en uitvoeren function populateList() wordt de hele list 
    //iedere keer opnieuw gemaakt en niet alleen
    //maar het ene item geüpdatet
    //In React of Angular kunnen individuele items wel geupdatet worden om
    // performance issues te voorkomen
    //type array(console.table(arrayName)) in console en zie de input items in de objecten

    //4: input verwijderen
    this.reset();
}

//6: functie maken om de list aan te maken met items(plates)
function populateList(plates = [],platesList ) {
    //7: loopen over ieder item in de array
    //.map zorgt erveoor dat er na de loop een array met rauwe data wordt gemaakt
    platesList.innerHTML = plates.map((plate, i) => {
        return `    
        <li>
        <!-- 9: afzonderlijk item verversen ipv hele list --> 
        <input type="checkbox" date-index={i} id="item${i}" ${plate.done ? 
        'checked' : ''} />
        <label for="item${i}">${plate.text}</label>
        </li>
        `;
        //het listitem wordt geupdatet ipv de hele lijst
    })
    //gerbuik de .join-method om van .map een string te maken
    .join('');
   
}
//16: functie toggleDone vaststelling check checkbox

function toggleDone(e) {

}

addItems.addEventListener('submit', addItem);

// https://courses.wesbos.com/account/access/64f0595c91ccd381616443e0/view/194129092 gebleven bij 22:30
const checkBoxes = document.querySelectorAll('input');

checkBoxes.forEach(input => input.addEventListener('click', () => alert('hi')))
//11: function callen populateList()
populateList(items, itemsList) 
//12: items array bestaat nog niet.