
//1:selecteer de input els
const inputs = document.querySelectorAll('.controls input'); //nodelist geen array: array heeft meer methods

//2:for each om te loopen

//3:function maken voor de html input el en jun data-properties
function handleUpdate() {
    // console.log(this.value);

    //5: prop 'blur'geen suffix(eenheid), dus een suffix obv het html element "data-sizing" creëeren:
    //6: testen data-set const suffix = this.dataset;
    const suffix = this.dataset.sizing || ''; //7: type data-prop in html-file
    console.log(this.name)
    // console.log(this.dataset); //dataset is een object met data attributen van een element
    //8: testen met: 
    // console.log(suffix);
    //9: Gehele doc selecteren om de css value van 'spacing', 'blur'en 'base' te krijgen
    // document.documentElement.style.setProperty(`--${this.name}`, this.value) //getallen veranderen wel, maar er worden geen eenheden aan toegevoegd
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) ; //geslaagd: de updates van de values werken
    //10: inline kan je ook variabelen overschrijven -> style="--base: prop-value;"

}

//4: statement met addEventListener met event en de function
inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));