// Snacks - Script basate sugli esercitazioni base.

/***
 * @this Creazione-e-Accesso:
    - Crea un array chiamato frutta con almeno 5 nomi di frutti.
    - Accedi e stampa il terzo elemento dell'array.
    - Modifica il primo elemento dell'array con un nuovo frutto.
    - Aggiungi un nuovo frutto alla fine dell'array.
    - Rimuovi l'ultimo frutto dall'array.
    - Stampa l'intero array frutta.
*/

    const fruits = ["Cocomero", "Banana", "Mela", "Anguria", "Arancia"];
    const terzo_frutto = fruits[3];
    const mod_primo = fruits[0].replace(fruits[0], "Pera");
    const end_list = fruits.push("Kiwi");
    const rm_end = fruits.pop();

    // console.log(fruits, terzo_frutto, mod_primo, end_list, rm_end);

/**
 * @this Lunghezza-dell'Array:
    - Crea un array vuoto chiamato numeri.
    - Aggiungi 3 numeri a tua scelta a questo array.
    - Stampa la lunghezza attuale dell'array numeri.
    - Aggiungi altri 2 numeri.
    - Stampa di nuovo la lunghezza dell'array.
 */

    let numeri = [];
    const num_add = () => {
        for (let index = 1; index < 6; index++) { numeri.push(index) }
    }
    num_add();

    // console.log(numeri, numeri.length);

    /**
     *   @this Duplicazione-Elementi:
     * - Crea un array numeriOriginali = [1, 2, 3, 4].
     * - Crea un nuovo array numeriDuplicati che contenga ogni numero di numeriOriginali moltiplicato per 2. 
     *   (Prova sia con un ciclo for che con map).
     */

    const numeri_originali = [1, 2, 3, 4, 5];
    const list_1 = numeri_originali.map(numbers => numbers * 2);
    const list_2 = () => { for (let index = 0; index < numeri_originali.length; index++) { numeri_originali[index] *= 2 } 
    return numeri_originali};

    // console.log(numeri_originali, list_1, list_2());

    /**
     * @this Filtrare-Elementi:
     * - Dato l'array eta = [12, 18, 22, 5, 30, 15].
     * - Crea un nuovo array maggiorenni che contenga solo le età maggiori o uguali a 18.
     */

    const età = [12, 18, 5, 30, 15];
    const età_mag = età.filter(age => age >= 18);

    // console.log(età_mag);

    /**
     * @this Calcolo-dei-dipendenti:
     * - Dato l'array di oggetti filtra i dependenti in base a quanti sono andati in vacanza.
     * - Crea un nuovo array basato solo esclusivamente sui nomi dei dipendenti.
     * - Poi calcola l'età media di tutti i dipendenti nell'array e ottenere la forma decimale (foreach o altri).
     */

    const employees = [
        { name: 'Alex', age: 21, onHoliday: true },
        { name: 'Susan', age: 28, onHoliday: false },
        { name: 'Jim', age: 56, onHoliday: true },
        { name: 'Kate', age: 55, onHoliday: true },
        { name: 'Anne', age: 37, onHoliday: false },
    ];

    // Esempio 1.
    const holiday_em = employees.filter(employee => employee.onHoliday);
    const name_list = employees.map(element => element.name);
    const age_md = employees.reduce((prev, next) => { return prev + next.age }, 0) / employees.length;

    // Esempio 2.
    let sum = 0;
    const age_md_for = employees.forEach((employee) => {sum += employee.age});
    const md_age = sum / employees.length;

    // console.log(holiday_em, name_list, age_md.toFixed(2), md_age.toFixed(2));


    /**
     * @this Array-Annidati:
     * - Crea un array studenti dove ogni elemento è un oggetto con proprietà nome e voto. Aggiungi almeno 3 studenti.
     * - Trova lo studente con il voto più alto.
     * - Calcola la media dei voti degli studenti.
     * - Crea un nuovo array che contenga solo i nomi degli studenti che hanno un voto superiore a 80.
     */

    const studenti = [ { nome: "Luca", voto: 85 },{ nome: "Giulia", voto: 92 },{ nome: "Marco", voto: 78 }];

    const vote_max = studenti.find(students => Math.max(students.voto));
    const vote_md = studenti.reduce((prev, next) => { return prev + next.voto}, 0) / studenti.length;
    const students_max = studenti.filter(students => students.voto > 80);

    // console.log(vote_max, vote_md, students_max);

    /**
     * @this Matrici-Annidate:
     * - Accedi e stampa il valore nella prima riga, seconda colonna.
     * - Usa cicli annidati per stampare tutti gli elementi della griglia.
     * - Calcola la somma di tutti gli elementi della griglia.
     */

    const griglia = [[1, 2, 3],[4, 5, 6]];

    const stamp_value = `${griglia[0][0]}/${griglia[1][0]}`;

    const cycle_grid = () => {
        let index = 0;

        for (index = 0; index < griglia[0].length; index++) {
            console.log(griglia[0][index]);
        }
        
        if (index <= griglia[0].length) {
            for (let i = 0; i < griglia[1].length; i++) {
                console.log(griglia[1][i]);
            }
        }
    };
    // cycle_grid()

    // Esempio 1.
    const sum_list = () =>{
        let result = 0;
        const sum_1 = griglia[0].reduce((prev, next) => { return prev + next}, 0);
        const sum_2 = griglia[1].reduce((prev, next) => { return prev + next}, 0);
        return result = sum_1 + sum_2;
    };

    //Esempio 2.
    let total = 0;
    const sum_lists = griglia.forEach((value) => {
        const sum = value.reduce((prev, next) => {return prev + next}, 0);
        return total += sum
    })

    // console.log(stamp_value, sum_list(), total);

    /**
     * @this Dupplicazione:
     * - Crea un nuovo array che contenga solo elementi unici (senza duplicati). 
     * - Prova ad usare Set o un approccio con includes.
    */

    const articoli = ["maglietta", "pantalone", "cappello", "maglietta", "scarpa", "pantalone"];

    const dup_list = articoli.filter(element => !element.includes("maglietta") && !element.includes("pantalone"));
    const new_list = [];
    const sets_list = new Set(articoli).forEach(value => new_list.push(value));

    console.log(dup_list, new_list);

    /**
     * @this filtraPariDispari:
     * - Scrivi una funzione che accetta un array di numeri.
     * - La funzione dovrebbe restituire un oggetto con due proprietà: pari (un array di numeri pari) e 
     *   dispari (un array di numeri dispari).
     */

    function GenList(){
        const numeri = [];
        const index_fun = () => {
            for (let index = 0; index < 20; index++) {
                numeri.push(index);
            }
        }
        index_fun();

        const pari = numeri.filter(num => num % 2 === 0);
        const dispari = numeri.filter(num => num % 2 !== 0);
    
        return console.log(pari, dispari);
    }

    GenList()