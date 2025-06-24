
/** 
 * @file Snacks Sulle Funzioni - JS Funzioni e Dichiarazione
 * 
 * - Esercizi:
 * 
 * @function SommaNumeri - Somma di due Numeri (Snack-1)
 */


// Svolgimento Prima Parte

SommaNumeri(23, 14);

function SommaNumeri(num1, num2){
    return console.log(num1 + num2);
}

const fun_ano = SommaNumeri(12, 34);

const arrow_fun = (num1, num2) => {
   return console.log(num1 + num2);
}

arrow_fun(100, 80);