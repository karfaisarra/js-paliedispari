/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

//L’utente sceglie pari o dispari
const pariDispari = prompt('inserisci pari o dispari');
console.log('hai scelto', pariDispari);

//L’utente inserisce un numero da 1 a 5
const userNumber = Number(prompt('inserisci un numero tra 1 e 5'));
console.log('hai scelto come numero', userNumber);

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione)
function randomNumber() {
    const randomNumberEl = Math.floor(Math.random() * 5) + 1;
    return randomNumberEl;
}
const numeroPc = randomNumber();
console.log('il pc ha scelto come numero:', numeroPc);

//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function somma(numb1, numb2) {
    const risultato = numb1 + numb2
    return risultato;
}

const addizione = somma(userNumber, numeroPc);

let verifica;
if (addizione % 2 == 0) {
    console.log('risultato della somma è pari ed è:', addizione);
    verifica = 'pari';
}else{
    console.log('risultato della somma è dispari ed è:', addizione);
    verifica = 'dispari';
}
//Dichiariamo chi ha vinto
if (pariDispari == verifica) {
    console.log('hai vinto');
}else{
    console.log('hai perso');
}
