//alert('ciao, sei nella cartella palindromo!')

/**********************************************************************************
TRACCIA 1 
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

***********************************************************************************/

// 1 - (prompt) per chiedere all'utente una parola
// 2 - trovare il modo di scriverle al contrario (fare array con reverse - split - join) 
// 3 - trovare il modo di dire true se si legge al contrario (fare array con reverse - split - join)
// 4 - inseriamo quello che serve nella (function)
// 5 - console.log positivo o negativo



// 1 - (prompt) per chiedere all'utente una parola
const userWord = prompt('scrivi una parola');
console.log(userWord);

// 2 - trovare il modo di scriverle al contrario (fare array con reverse - split - join) 
const splitWord = userWord.split('');
console.log(splitWord);

const reverseLetters = splitWord.reverse('');
console.log(reverseLetters);

const reverseUserWord = reverseLetters.join('');
console.log(reverseUserWord);


// 5 - console.log positivo o negativo
// 3 - trovare il modo di dire true se si legge al contrario (fare array con reverse - split - join)
/* if (userWord == reverseUserWord) {
    console.log('la tu parola è palindroma');
} else {
    console.log('la tua parola non è palindroma');
} */

// 4 - E MO CAPIRE COME STRUTTURARE SOTTO FORMA DI FUNZIONE

function palindromo() {
    if (userWord == reverseUserWord) {
        console.log('la tu parola è palindroma');
    } else {
        console.log('la tua parola non è palindroma');
    }
}

palindromo();







