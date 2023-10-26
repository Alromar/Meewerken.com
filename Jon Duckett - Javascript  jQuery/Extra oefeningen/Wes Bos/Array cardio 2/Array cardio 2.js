
const people = [
    {name: 'Wes', year: 1988},
    {name: 'Kait', year: 1986},
    {name: 'Irv', year: 1970},
    {name: 'Lux', year: 2015}
];

const comments = [
    {text:'L9ove this!', id: 523432},
    {text:'Super good', id:823432},
    {text:'Yoe are the best', id: 203984},
    {text:'Ramen is my fav food ever', id: 123523},
    {text:'Nice Nice Nice', id: 542328},
];

//Array Methods::::::::::::::::::::::

//.Array.some methode(conditional of 1 iemand voldoet)
    //implicit return (Korste function):
         const isAdult = people.some(person => ((new Date()).getFullYear())- person.year >= 19);

    //Middenlange function:
        // const isAdult = people.some(person => {
        //     const currentYear = (new Date()).getFullYear(); 
        //     return currentYear - person.year >= 19;
        // });

    //Lange function:
        // const isAdult = people.some(function(person) {
        //     const currentYear = (new Date()).getFullYear();
        // if(currentYear - person.year >= 19) {
        //     return true;
        // }
        // });


        // console.log(isAdult);
    //statement tussen curly braces elementtype te zien
        console.log({isAdult});

 //Array.every(conditional of iedereen voldoet)
        const allAdults = people.every(person => ((new Date()).getFullYear())- person.year >= 19);
        console.log({allAdults});


//array.find(zoekt eerste item in array) -> zoekt comment met id 823432
    //implicit return (Kortste function):
        const comment = comments.find(comment =>
        comment.id === 823432);

     //Lange function:
    // const comment = comments.find(function(comment) {
    //     if(comment.id === 823432) {
    //         return true;
    //     }
    // });
        console.log({comment});

//array.findIndex(zoekt welk index nummer van el in array)
    //Zoek comment obv id
    //delete comment
        const index = comments.findIndex(comment => comment.id ===
                823432);
        console.log(index);
    //1-2:verwijder de entry dmv array.splice
        // comments.splice(index, 1);
    // {text:'Super good', id:823432} is weg
    //2-2: kopie met nieuw Array maken met de spread(...) operator uit ES6 
    const newComments = [
        ...comments.slice(0, index),
        ...comments.slice(index + 1)
            ];    
    //met console.table helder overzicht  
            //voer uit in chrome console:   - console.table(comments);
                                            //- console.table(newComments);



