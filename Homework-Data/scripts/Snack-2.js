
// Snacks-2

/**
 * @this Somma-i-numeri-pari-in-un-array
 * @example const arr = [1, 2, 3, 4, 5, 6];
 */

const arr_num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const num_par = arr_num.filter((num) => num % 2 === 0).reduce((acc, num) => { return acc + num });
// console.log(num_par);

/**
 * @this Fattoriale-di-un-numero:
 * @access Scrivi una funzione ricorsiva che calcola il fattoriale di un numero intero positivo.
 */

function FattorialeNum_2(n) {
    if(n === 0){
        return 1;
    } else {
        return FattorialeNum(n - 1) * n;
    }
}

const result_num = FattorialeNum_2(4);
// console.log(result_num);

function FattorialeNum(n) {
    let result = 1;
    let index = 1;
    while (index <= n) {
        result *= index; // Concetto elementare.
        index++
    }
    return result
}

const num_rs = FattorialeNum(4);
// console.log(num_rs);

/**
 * @this Ripetizione:
 * @example Creazione di una copia di un oggetto quali usare per il diverso scopo.
 */

const hamburger = { 
	name: "Cheese Burger", 
	weight: 250,
	maker: {
		name: "Anonymous Chef",
		restaurant: {
			name: "Hyur's Burgers",
			address: "Main Street, 123",
			isOpen: true,
		},
		age: 29
	}
};

const clone_ham = {...hamburger, maker:{...hamburger.maker, restaurant: {...hamburger.maker.restaurant}}};
clone_ham.name = "Vegan Buger";
clone_ham.maker.name = "Massimo Boffetti Chef";
// console.log(clone_ham);
// console.log(hamburger);

/**
 * @this Conta-fino-a-0:
 * @example Stampa i numeri da n fino a 0 usando la ricorsione.
 */

function CountNumber(n){
    let index = 0;
    let result = [];
    while (index < n) {
        result.push(index)
        index++
    }
    return result
}

const list_rs = CountNumber(20);
// console.log(list_rs);

function CountRecorsion(n) {
    const limit = 12;
    if (n > limit) {
        return;
    }
    console.log(n);
    CountRecorsion(n + 1);
}

// console.log(CountRecorsion(1));

/**
 * @this Somma-degli-elementi-di-un-array:
 * @example Somma tutti gli elementi di un array usando la ricorsione.
 */

const arr_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = 0;
let index = 0;

function sommaArray(arr) {
    if (index === arr.length) {
        return result;
    }

    result += arr[index];
    index++;
    return sommaArray(arr);
}

// function Num(arr, index= 0) {
//     if (index >= arr.length) {
//         return 0;
//     }

//     return arr[index] + Num(arr, index + 1);
// }

// console.log(sommaArray(arr_numbers));

/**
 * @this Inverti-una-stringa:
 * @example const str = "ciao"; // output: "oaic"
 */

const string = "Hello Worlds!!";

const reverse = string.split("").reverse().join("");
// console.log(reverse)

const reverse_words = (words) => {
  const words_scomposition = words.split("");
  let newString = "";
  for (let index = words_scomposition.length - 1; index >= 0; index--) {
       newString += words_scomposition[index];
  }
  return newString
}

// const fun_reverse = reverse_words(string);
// console.log(fun_reverse);

const while_reverse = (words) => {
    let index = words.length - 1;
    let new_string = "";

    if (words !== "") {
        while (index >= 0) {
            new_string += words[index];
            index--;
        }
        return new_string
    } else {
        return words
    }
}

// const while_string = while_reverse(string);
// console.log(while_string);

function recursion_reverse(words) {
    if (words === "") {
        return words
    } else {
        return recursion_reverse(words.slice(1)) + words.charAt(0)
    }
}

const assgn_recursion = recursion_reverse(string);
console.log(assgn_recursion);

console.log(string.slice(3) + string.charAt(3))