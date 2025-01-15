//Palidroma Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

/*Domande da farsi quando si crea una funzione:
Come dovrebbe chiamarsi?
Ho bisogno di parametri?
Devo restituire un valore?
Se sì, di che tipo?*/

/*
Minitask:
-creo un prompt 
-creo una funzione che verifica se la parola che viene inserita è == al risultato della parola scritta al contrario
-all'interno della funzione metto una variabile result.  
-creo una condizione all'interno della funzione

*/

/* 
let inserisciParola = prompt ("inserisci una parola")

function isPalindrome(x){
    let result = x.split("").reverse().join("");

    if(result == x) {
        return true;
        //console.log(`La parola ${inserisciParola} è palidroma`)
    } else {
        return false;
        //console.log(`La parola ${inserisciParola} non è palidroma`)
    }
    
}

 //isPalindrome(inserisciParola)

if(isPalindrome(inserisciParola) == true) {
    console.log(`La parola ${inserisciParola} è palidroma`)
} else {
    console.log(`La parola ${inserisciParola} non è palidroma`)
}

 */


/*Pari e Dispari 
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
 Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */

/*
Mini task: 
-creo una variabile con prompt per scegliere un numero da 1 a 5. 
-creo una funzione usando la proprietà Math.floor(Math.random() * 10) + 1; per generare un numero per il computer da 1 a 5.
-creo una funzione per avere il risultato della somma dei due numeri e, tramite il modulo %, stabilisco se il numero è pari o dispari.
-stampo il risultato con il vincitore
*/

let numeroUtente = parseInt(prompt ("inserisci un numero da 1 a 5"));
console.log(`Il numero che hai scelto è: ${numeroUtente}`);

//funzione che genera il numero del computer
function generaNumero(min, max){
    return Math.floor(Math.random() * max) + min; 
        
}
let numeroComputer = generaNumero(1,5);
console.log(`Il numero del computer è: ${numeroComputer}`);

//funzione che somma i numeri dell'utente e del computer
function calcoloDeiNumeri(num1, num2){
    let somma = num1 + num2;
    return somma
}
let sommaNumeri = calcoloDeiNumeri;
console.log(`La somma dei due numeri è: ${sommaNumeri(numeroUtente, numeroComputer)}`)

//funzione che verifica se il numero è pari o dispari
function verificaNumeriPariODispari(x){
    if(sommaNumeri % 2) {
        return console.log("questo numero è pari")
    } else {
        return console.log("questo numero è dispari")
    }
}

verificaNumeriPariODispari(sommaNumeri)

