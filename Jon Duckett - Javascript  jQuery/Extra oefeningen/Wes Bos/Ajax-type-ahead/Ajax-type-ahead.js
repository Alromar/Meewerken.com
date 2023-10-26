//Tekstvak maken met invoer land enuitvoer hoofdstad met queries highlights
//capitals.find(x=>x.capital === "parameter").name;


const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';


//idee: dataset maken voor hoofdsteden zoeken bij landen:
const capitalsEndpoint = 'https://gist.githubusercontent.com/uffanahmed/dc2b9fbd54472067671c2086db3683fa/raw/27d93ba7319ca6713a3601ace537bf4ff96d75da/List%2520of%2520all%2520countries%2520JSON.json'

console.log(endpoint);

//1: filteren array op stad en hoofdstad
const cities = [];
const countries = [];
console.log(countries);

//2: fetch data met Fetch API in browser
//2: return promise in google dev tools
const prom = fetch(endpoint);
console.log(prom); // en niet:
// fetch(endpoint,function(data) {
//     console.log('data');
// })

const promCapital = fetch(countries);
console.log(promCapital);


//3: converteren raw data naar JSON method 'f' zie Google Dev Tools 
fetch(endpoint)
        .then(blob => blob.json())
        // .then(data => console.log(data));
//4: push array in const cities
        .then(data => cities.push(...data));

fetch(capitalsEndpoint)
                .then(blub => blub.json())
                .then(data => countries.push(...data));
            

//5: filter array naar subset
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //figure out if city or capital matches what was searched
        //variabele stoppen in een regular expression
        const regex = new RegExp(wordToMatch, 'gi');
        //'gi' is global, insensitive search
        //koppelen aan paatsnaam en staat
        return place.city.match(regex) ||place.state.match(regex);
    });
}

function findCapitals(wordsToMatch, countries) {
    return countries.filter(place => {
        const regexCap = new RegExp(wordsToMatch, 'gi');
        return place.name.match(regexCap)|| place.capital.match(regexCap);
        console.log(regexCap);
    });
}

//18: de commas weghalen bij aant population
//19: voeg als keyword toe aan span class "population"
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


//6: functie tekstvak 
function displayMatches() {
    // console.log(this.value);
    //10: maak een nieuwe variabele van de function 'fidMatches' met de waarde van de variabele 'cities'
    const matchArray = findMatches(this.value, cities);
    // console.log(matchArray);
    //11:variabele die de var 'matchArray' filtert en een loop maakt en als return een array met een list el geeft en toevoegt 
    //aan de variabele 'suggestions'
    const html = matchArray.map(place=> {
        //14: var regex, cityname en statename maken
        // 15: het getypte, de gegex, vervangen door een span voor geel markeren voor zowel de stad als de staat
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        console.log(cityName);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        return `
        <li>
     <!-- <span class="name">${place.city}, ${place.state}</span> -->
     <!-- 16: vervangen 'place.state' met stateName-->
     <!-- 17: de de staatnamen bevatte nnu ook een span met gele markering-->
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>`;
        //12: met de .join() zorg je ervoor dat er een string en geen array wordt weergeven
    }).join('');
    suggestions.innerHTML = html;
}

function displayCapitalMatches() {
    const capitalsArray = findCapitals(this.value, countries);
    const htmlCapitals = capitalsArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const countryName = place.name.replace(regex, `<span class="hl">${this.value}</span`);
        const capitalName = place.capital.replace(regex, `<span class="hl">${this.value}</span`);
        return `<li>
   <span class="hl">${place.name}, ${place.capital}</span>
</li>`;     
    }).join('');
    suggestionsCap.innerHTML = htmlCapitals;
}


//7: variabele input tekstvak class input eleemnt
const searchInput = document.querySelector('.search');


//8: selecteer el ul class 'suggestions' en voeg eventListener toe aan variabele searchInput
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
//ziet de waarde in console log na click buiten tekstinvoer

//selecteer classes input tekstvak en suggestionsCap
const searchCap = document.querySelector('.searchCap');
const suggestionsCap = document.querySelector('.suggestionsCap');
searchCap.addEventListener('change', displayCapitalMatches);
searchCap.addEventListener('keyup', displayCapitalMatches);




//9: voeg eventlistener toe aan 
searchInput.addEventListener('keyup', displayMatches);
//eventlistener plaatsen bij tekstvak . searchCap  


//ziet de waarde in console log na input


