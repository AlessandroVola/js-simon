console.log(`JS OK!`);


// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.





// configurazione

const NUMBER_TO_GUESS = 5

// prendo elemento container dal DOM
const containerElement = document.getElementsByClassName(`container`);

// // creo un div nel DOM
// let randomNumberElement = document.createElement(`div`);

// // gli aggiungo la classe
// randomNumberElement.className = (`random-number`)

// generare 5 numeri random univoci

const numbersGenerated = [];

while (numbersGenerated.length < NUMBER_TO_GUESS) {
    // genera numero random
    const randomNumber = getRandomNumber(1, 100);
    console.log(randomNumber);
    // verificare che non sia già presente nell'array
    if (!numbersGenerated.includes(randomNumber)) {
        numbersGenerated.push(randomNumber);
    }

}

containerElement.innerhtml = numbersGenerated.join(` - `);

// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().

setTimeout(function () {
    console.log(`timeout`)
    // nascondere i numeri
    containerElement.innerhtml = ``;
    // utente inserisce con prompt 5 numeri
    const userNumbers = inputUserNumber();
    console.log(userNumbers);
}, 3000);






// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.












// FUNZIONE NUMERO RANDOM
function getRandomNumber(min, max) {
    const range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
}




// FUNZIONE GENERARE NUMERI UNIVOCI
function getUniqueRandomNumbers(howMany, min, max) {

    const array = [];

    while (array.length < howMany) {
        // genera numero random
        const randomNumber = getRandomNumber(min, max);
        console.log(randomNumber);
        // verificare che non sia già presente nell'array
        if (!array.includes(randomNumber)) {
            array.push(randomNumber);
        }
    }
}

// FUNZIONE
function inputUserNumber() {
    const guessedNumber = [];

    while (guessedNumber.lenght < NUMBER_TO_GUESS) {
        const number = parseInt(prompt(`Dimmi i numeri uno alla volta`));
        // verificare sia un numero
        if (!isNaN(number))
            guessedNumber.push(number);
    }


    return guessedNumber
}