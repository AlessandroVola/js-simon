console.log(`JS OK!`);


// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// prendo elemento container dal DOM
const containerElement = document.getElementsByClassName(`container`);

// generare 5 numeri random

for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 100));
    // creo nel div un elemento
}

