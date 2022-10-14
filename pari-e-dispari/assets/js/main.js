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

function pariDispari(number) {
    if ((number % 2 !== 0) && (pariDispariUser % 2 !== 0)) {
        console.log('la somma è pari ed hai vinto tu');
    } else {
        console.log('la somma è dispari ed ha vinto il computer');
    }
}

pariDispari();


