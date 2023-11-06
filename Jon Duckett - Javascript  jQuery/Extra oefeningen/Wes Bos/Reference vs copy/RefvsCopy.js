let age = 100
let age2 = age
console.log(age,age2)
age=200
console.log(age,age2)

let name = 'Wes'
let name2 = name
console.log(name, name2)
name= 'wesley'
console.log(name,name2);

const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']
//reference of array
const team = players;

console.log(players, team)
//array players verandert ook
// team[3]= 'Lux'

//1: copy of array
const team2 = players.slice()

//2: of nieuwe array en  concatten met origineel
const team3 = [].concat(players);

//3: of ES6 spread
const team4 = [...players];
team4[3] = 'Ajax';
console.log(team4);

//4: of array.from
const team5 = Array.from(players)

//copy van objects
const person = {
    name: 'Wes Bos',
    age:80
};

//reference
// const captain = person;
// captain.number = 99;

//1: copy door object.assign
const cap2 = Object.assign({}, person, {number: 99, age: 12});
console.log(cap2);

//2: copy door object spread
const cap3 = {...person};

//3: 
const wes = {
    name: 'Wes',
    age:100,
    social:{
        twitter: 'wesbos',
        facebook: 'wesbos.developer'
    }
}
console.clear();
console.log(wes);

const dev = Object.assign({}, wes);

//4: copy door clone json
const dev2 = JSON.parse(JSON.stringify(wes))

JSON.stringify(wes)
JSON.parse(JSON.stringify(wes))
console.log(wes)
