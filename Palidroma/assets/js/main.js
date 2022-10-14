/* Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

//prova 1
/*
const parola = prompt('inserisci una parola');
console.log(parola);
const parolaDivisa = parola.split('');
console.log(parolaDivisa);

const parolaDivisaInvertita = parolaDivisa.reverse();
console.log(parolaDivisaInvertita);


const parolaInvertita = parolaDivisaInvertita.join('');
console.log(parolaInvertita);

if(parola == parolaInvertita){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
} 
*/
//prova 2

// chiedo all'utente di inserire una parola
const parola = prompt('inserisci una parola');
console.log(parola);

//faccio una funzione che fa un confronto tra una stringa letta da sinistra verso destra e della stessa stinga letta da destra verso sinistra usando if else 

function palidroma(word) {
    const parolaDivisa = word.split('');
    //console.log(parolaDivisa);
    const parolaDivisaInvertita = parolaDivisa.reverse();
    //console.log(parolaDivisaInvertita);
    const parolaInvertita = parolaDivisaInvertita.join('');
    //console.log(parolaInvertita);
    return parolaInvertita;
}
const risultato = palidroma(parola);
//console.log('sono la nuova variabile che contiene il risultato della funzione', risultato );

//stampo il risultato
if(parola == risultato){
    console.log('la parola è palindroma');
} else {
    console.log('la parola non è palindroma');
} 