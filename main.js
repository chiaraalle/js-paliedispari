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

let inserisciParola = prompt ("inserisci una parola")

function reverse(x){
    let result = x.split("").reverse().join("");

    if(inserisciParola == x) {
        return true;
    } 
    
}

x = (inserisciParola)
if(inserisciParola) {
    console.log(`La parola ${inserisciParola} è palidroma`)
} else {
    console.log(`La parola ${inserisciParola} non è palidroma`)
}

 


/*Pari e Dispari L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
Consigli del giorno
Scriviamo sempre in italiano i passaggi che vogliamo fare
Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti. */