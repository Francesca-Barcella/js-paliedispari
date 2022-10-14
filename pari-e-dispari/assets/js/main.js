//alert('ciao, sei nella cartella pari e dispari!')

/************************************************** 
TRACCIA 2
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

**************************************************/

//1 - number(prompt) per chiedere un numero all'utente
//2 - numero random per il pc (math.random)
//3 - faccio la somma dei numeri per vedere se è pari o dispari (% 2 == 0)
//4 - creo la (function) con gli (if else)
//5 - console.log del vincitore


// 1 - number(prompt) per chiedere un numero all'utente
const pariDispariUser = prompt('Scegli pari o dispari');
console.log('hai scelto: ' + pariDispariUser);
const numberPlayer = Number(prompt('Scegli un numero da 1 a 5'));
console.log('hai scelto il numero: ' + numberPlayer);

//2 - numero random per il pc (math.random)
const numberPc = Math.floor(Math.random() * 5 + 1);
console.log('Il numero del computer è: ' + numberPc);

//3 - faccio la somma dei numeri per vedere se è pari o dispari (% 2 == 0)
const sum = numberPlayer + numberPc;
console.log('la somma dei due numeri è: ' + sum);
let isSumPari = (sum % 2 == 0);
console.log(isSumPari);

// function pariDispari(number) {
//     if (result !== pariDispariUser) {
//         console.log('hai vinto tu');
//     } else {
//         console.log('vinto il computer');
//     }
// }

// pariDispari();

/**
 * 
 * @param {boolean} checkPari 
 * @returns 
 */
function resultSum(checkPari){

    let risultato = '';

    if (checkPari){
        risultato = 'pari';
    } else {
        risultato = 'dispari';
    }

    return risultato;
}


const pariDispari = resultSum(isSumPari);

/**
 * 
 * @param {string} giocataUtente 
 * @param {string} check 
 */

function winner(giocataUtente, check) {
    if (giocataUtente === check){
        console.log('hai vinto tu');
    } else {
        console.log('ha vinto il computer');
    }
}

winner(pariDispariUser, pariDispari);


/**
 * checkMaggiore
 * @param {int} numeroUno
 * @param {int} numeroDue
 */