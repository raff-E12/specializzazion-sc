// Problemi di logica senza utilizzare le AI.

// Primo box.
let word_selected = "ciccio12";
const btn_1 = document.getElementById("btn-1");

function Pali_fun(words) {
const pattern = /[^a-zA-Z-0-9\s]/gi; // ^ -> indica quali caratteri mantenere diversi dagli altri.
let word_lowercase = words.toLowerCase().replace(pattern, "");
let word_array = word_lowercase.trim().split("").reverse().join("");
let result_word = "";

// console.log(word_array);
// console.log(word_lowercase)

if (word_lowercase === word_array) {
   return result_word = "è palindroma come parola";
} else {
  return result_word = "non è palindroma";
}
}

// console.log(Pali_fun(word_selected));
btn_1.addEventListener("click", () => {
   word_selected = window.prompt("Scrivi una Parola");
   return window.alert(Pali_fun(word_selected));
})

// Secondo box.
const btn_2 = document.getElementById("btn-2");

function Count_Flizz() {
let index = 0;
let strings = "";

for (index = 0; index < 200; index++) {
   if(index % 3 === 0 && index % 5 === 0) {
      console.log("FlizzBuzz");
   }else if (index % 3 === 0) {
      console.log("Flizz");
   } else if(index % 5 === 0) {
      console.log("Buzz");
   }else {
     console.log(index);
   }
}

return index
}

// Count_Flizz();
btn_2.addEventListener("click", () => {
   Count_Flizz()
   return window.alert("Guarda in Console");
})


// Terzo box.
const btn_3 = document.getElementById("btn-3");

const list_arrays = [1, 2, 3, 5, 6, 5, 6, 7, 8, 9, 10, 10, 9, 4];
const new_list = [...new Set(list_arrays)].sort((a, b) => {return a - b}); //Ordinamento da a - b in ordine crescente
// console.log(new_list)

let new_list_string = [];
const list_string = ["Mario", "Luigi", "Pippo", "Antonio", "Dario", "Antonio", "Pippo", "Giovanni"];
const new_strings = new Set(list_string).forEach(element => new_list_string.push(element));
// console.log(new_list_string);
btn_3.addEventListener("click", () => {
   window.alert(new_list_string);
   return window.alert(new_list);
})


// Quarto box.
let string_value = "";
const btn_4 = document.getElementById("btn-4");

function Object_words(strings) {
let object_words = {};
let count_words = 0;
const string_splits = strings.toLowerCase().split("");

for (const key in string_splits) {
   const key_value = string_splits[key]; //Lettera di estrazione dall'array

   if (object_words[key_value]) {
      object_words[key_value]++;
   } else {
      object_words[key_value] = 1;  
   } 
}

return object_words;
}

btn_4.addEventListener("click", () => {
   string_value = window.prompt("Scrivi una Parola:");
   console.log(Object_words(string_value))
   return window.alert("Guarda in Console");
})

// Quinto Box.
let raggio = 0;
const btn_5 = document.getElementById("btn-5");

function Area_CirleFun(r) {
   const pi = Number(Math.PI.toFixed(2));
   const area = pi * (r * 2);
   const strings = "Area di :" + area;
   return strings
}

btn_5.addEventListener("click", () => {
   let raggio = Number(window.prompt("Inserisci il raggio:"));
   window.alert(Area_CirleFun(raggio));
})

// Sesto Box.
const btn_6 = document.getElementById("btn-6");
let list_flizz = [];
let strings_values = "";
let Strings_Map = {};

function Flizz_List(){
   for (let index = 0; index < 100; index++) {
      if (list_flizz.length === 100) {
        return list_flizz
     } else {
      if (index % 3 === 0 && index % 5 === 0) {
         let string = "FlizzBuzz";
         list_flizz.push(string);
      } else if (index % 3 === 0){
         let string = "Flizz";
         list_flizz.push(string);
      } else if (index % 5 === 0){
         let string = "Buzz";
         list_flizz.push(string);
      } else {
         list_flizz.push(index);
      }
     }
   }
   console.log(list_flizz);
}

// Flizz_List()

function Flizz_ListWhile() {
   let index = 0;
   while (index < 100) {

      if(index % 3 === 0 && index % 5 === 0){
         console.log("FlizzBuzz");
      } else if (index % 3 === 0){
         console.log("Flizz");
      } else if (index % 5 === 0){
         console.log("Buzz");
      } else {
         console.log(index);
      }

      index++;
   }
}

// Flizz_ListWhile();

function Object_Compositions() {

   if (Object.values(Strings_Map).length !== 0) {
      Strings_Map = {};
   }

   const pattern = /[^a-zA-Z-0-9]/gi;
   const list_words = strings_values.toLowerCase().replace("-", "").replace(pattern, "").split("");
   let count = 0;

      for (let index = 0; index < list_words.length; index++) {
         let words_index = list_words[index];

         // console.log(Strings_Map)
         // console.log(list_words)

         if (Strings_Map[words_index]) {
         Strings_Map[words_index]++;
         } else {
            Strings_Map[words_index] = 1;
         }
      }
   
   console.log(Strings_Map)
}

// Object_Compositions();

btn_6.addEventListener("click", ()=>{
   strings_values = window.prompt("Inserisci una Parola:");
   Flizz_List();
   Object_Compositions();
   return window.alert("Guarda la Console");
})

//Settimo Box.
const list_sorted = [1, 2, 3, 4, 5, 6 ,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
let number_ref = 0;
const btn_8 = document.getElementById("btn-8");

function Binary_SearchValue() {
   let start_index = 0; // Indice di inizioe
   let end_index = list_sorted.length -1; // Indice di fine

   console.log(list_sorted, number_ref)

   while (start_index <= end_index) { //Condizione configura il rage di fine e inizio nella continua ricerca del valore.

      let mid_value = Math.floor((start_index + end_index) / 2); // Valore medio in lista

      console.log("mid:", mid_value)
      console.log("start:", start_index)
      console.log("end:", end_index)

      if (list_sorted[mid_value] === number_ref) return console.log(true) // Verifica se il valore e uguale a quello medio

      if (number_ref < list_sorted[mid_value]) { // stabilisce se il numero di riferimento e minore rispetto a quello medio, se è l'inverso aumento
         end_index = mid_value - 1; // con questo stabiliamo la posizione verso destra.
      } else {
         start_index = mid_value + 1; // con questo stabiliao la posizione verso sinistra.
      }

      console.log("mid:", mid_value)
      console.log("start:", start_index)
      console.log("end:", end_index)
   }

   return console.log(false);
}

btn_8.addEventListener("click", ()=>{
   number_ref = Number(window.prompt("Scrivi Un Solo Numero da 1 a 20:"))
   window.alert("Guarda la Console");
   Binary_SearchValue()
});

// Ottavo Box

const list_numbers = [10, 15, 7, 33, 18, 19, 20, 40, 80, 100];
const index_number = list_numbers[6];

// La funzione separa un array in due parti distinte per renderlo un array ordinato
function QuickSort_Calc(arrays, pivot) {

   let less_list = [];
   let grater_list = [];

   if (arrays.length < 2) {
      return arrays
   } else {

      let less = () => {
         for (let index = 0; index < arrays.length; index++) {
            if (arrays[index] <= pivot) {
               less_list.push(arrays[index])
            }
         }
      }

      let grater = () => {
         for (let index = arrays.length; index > 0; index--) {
            if (arrays[index] > pivot) {
               grater_list.push(arrays[index])
            }
         }
      }

      less();
      grater();

      // Per quicksort è un algoritmo di ordinamento in cui predeve di ordinare un array in maniera ordinata
      // dove si basa sulla suddivisione dei seguenti array in diverse parti come scelta un numero di riferimento.

      const quicksort = {
         left: less_list.filter(element => element !== pivot), // lista dei numeri piu piccoli rispetto al numero scelto
         pivot: pivot, // Numero scelto di mezzo
         right: grater_list.sort((a,b) => a - b) //lista dei numeri più grandi rispetto al numero scelto
      };


      let union = [...quicksort.left, pivot, ...quicksort.right]; // una volta composto il risultato sarà identico alla lista creata

      console.log(arrays)
      console.log("Unione dei risultati", union.sort((a, b) => a - b))
      console.log("QuickSort", quicksort);
   }
}

QuickSort_Calc(list_numbers, index_number);

// Nono Box.

const box_notfication = document.getElementById("notify");

function Notify_Fun(){
   let settings = false;

   const show = setTimeout(() => {
      box_notfication.classList.remove("close");
      box_notfication.classList.add("open");
      settings = true;

      if (settings) {
         const close = setTimeout(() => {
            box_notfication.classList.remove("open");
            box_notfication.classList.add("close");
            settings = false
      }, 3000)
      }
   }, 3000);

   // console.log(settings)
}

Notify_Fun();

// Decimo Box.

const text_selection = document.getElementById("par-an");
const btn_9 = document.getElementById("btn-9")

function Animation_Text() {
   btn_9.setAttribute("disabled", "disabled");
   text_selection.textContent = "";
   text_selection.classList.add("prompt");
   const msg = "Ciao, sono un simulatore di digitazione!";
   const sud_text = msg.split("");
   // let pushing_text = [];
   // let count = -1;
   let delay = 0;
      sud_text.forEach((words, index) => {
      // pushing_text.push(element);
      
      const interval_text = setTimeout(() => {
         text_selection.textContent += words;
         if (index === sud_text.length - 1) {
            clearTimeout(interval_text);
            btn_9.removeAttribute("disabled");
            text_selection.classList.remove("prompt");
         }

         }, delay)
         // console.log(pushing_text)
         // console.log(delay)
         delay += 170;
      })
}

btn_9.addEventListener("click", Animation_Text);

// Concetto di Creazione Oggetti.

// const obj = {
//    name: "pippo",
//    last: "ambrosio",
//    saluto(){
//       return this.name + this.last;
//    }
// }

// function Persona(name, last) {
//    this.name = name;
//    this.last = last;
//    this.saluto = function() {
//       return this.name + this.last;
//    }
// }

// class Persona_2{
//    constructor(name, last){
//       this.name = name;
//       this.last = last;
//    }
//    saluto(){
//       return this.name + this.last
//    }
// }

// const obj_new = obj.saluto();
// const fun_new = new Persona("Pippo", "Laudato");
// const class_obj = new Persona_2("Giggi", "D'Alessio");
// console.log(fun_new.saluto());
// console.log(class_obj.saluto());
// console.log(obj_new)