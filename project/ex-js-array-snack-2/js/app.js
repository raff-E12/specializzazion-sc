
// Snack del Giorno - Metodi Degli Array

const books = [
  { 
	  title: "React Billionaire", 
	  pages: 250, 
	  author: {
		  name: 'Alice',
		  age: 35
	  },
	  available: false,
	  price: '101€',
	  tags: ['advanced', 'js', 'react', 'senior']
  },
  { 
	  title: "Advanced JS", 
	  pages: 500, 
	  author: {
		  name: 'Bob',
		  age: 20
	  },
	  available: true,
	  price: '25€',
	  tags: ['advanced', 'js', 'mid-senior']
  },
  { 
	  title: "CSS Secrets", 
	  pages: 320, 
	  author: {
		  name: 'Alice',
		  age: 17
	  },
	  available: true,
	  price: '8€',
	  tags: ['html', 'css', 'junior']
  },
  { 
	  title: "HTML Mastery", 
	  pages: 200, 
	  author: {
		  name: 'Charlie',
		  age: 50
	  },
	  available: false,
	  price: '48€',
	  tags: ['html', 'advanced', 'junior', 'mid-senior']
  },
];

// Snack 1° -  Filtra e Modifica
// Crea una funzione che somma due numeri.
// Crea un array (longBooks) con i libri che hanno più di 300 pagine;
// Creare un array (longBooksTitles) che contiene solo i titoli dei libri contenuti in longBooks.
// Stampa in console ogni titolo nella console.

const longBooks = books.filter(book => book.pages > 300);
console.log(longBooks)

const longBooksTitles = longBooks.map(book => book.title);
console.log(longBooksTitles)

// Snack 2° - Il primo libro scontato
// Creare un array (availableBooks) che contiene tutti i libri disponibili.
// Crea un array (discountedBooks) con gli availableBooks, ciascuno con il prezzo scontato del 20% (mantieni lo stesso formato e arrotonda al centesimo)
// Salva in una variabile (fullPricedBook) il primo elemento di discountedBooks che ha un prezzo intero (senza centesimi).

const availableBooks = books.filter(book => book.available);
console.log(availableBooks)

const discountedBooks = availableBooks.map(book => { return {...book, price: `${parseInt(Number(book.price.replace("€", "")) * .20).toFixed(2)}€`}});
console.log(discountedBooks)

const fullPricedBook = discountedBooks.find(book => {return Number(parseInt(Number(book.price.replace("€", "")) * .8).toFixed(0) % 1 === 0)});
console.log(fullPricedBook)

// Snack 3° - Ordinare gli Autori
// Creare un array (authors) che contiene gli autori dei libri.
// Crea una variabile booleana (areAuthorsAdults) per verificare se gli autori sono tutti maggiorenni.
// Ordina l’array authors in base all’età, senza creare un nuovo array.
// (se areAuthorsAdult è true, ordina in ordine crescente, altrimenti in ordine decrescente)

let authors = books.map(book => book.author);

const total_year = authors.reduce((acc, value) => acc + (value.age % 50), 0); // Limite effetivo
const areAuthorsAdults = authors.every(author => author.age >= 18);
const text = areAuthorsAdults ? "Si, sono tutti maggiorenni" : "No, non sono tutti maggiorenni";
console.log(text)

authors.sort((a, b) => {return areAuthorsAdults ? a.age - b.age : b.age - a.age});
console.log(authors)

// Snack 4° - Calcola l’età media
// Creare un array (ages) che contiene le età degli autori dei libri.
// Calcola la somma delle età (agesSum) usando reduce.
// Stampa in console l’età media degli autori dei libri.

const ages = books.map(book => book.author.age);
console.log(ages);

const agesSum = ages.reduce((acc, value) => acc + value, 0);
console.log(agesSum % ages[3]);

// Snack 5° - Raccogli i libri
// Usando la l'API usa la combinazione di .map() e Promise.all(), 
// per creare una funzione (getBooks) che a partire da un array di id (ids), 
// ritorna una promise che risolve un array di libri (books).
// Testala con l’array [2, 13, 7, 21, 19] .

function getBooks(params) {
    const new_list = params.map((id) => {
        const books_get = `http://localhost:3333/books/${id}`;
        const RequestApi = fetch(books_get).then(data => data.json()).catch(error => console.log(error));
        return RequestApi
    });

    const listPromises = Promise.all(new_list);
    return listPromises
}

const booksApi = async () => {
    console.log("Ricerca dei Risultati...")
    const ListID = [2, 13, 7, 21, 19];
    const booksList = await getBooks(ListID);
    console.log(booksList);
};

booksApi()

// Snack 6° - Ordina i libri
// Crea una variabile booleana (areThereAvailableBooks) per verificare se c’è almeno un libro disponibile.
// Crea un array (booksByPrice) con gli elementi di books ordinati in base al prezzo (crescente).
// Ordina l’array booksByPrice in base alla disponibilità (prima quelli disponibili), senza creare un nuovo array.

const areThereAvailableBooks = books.some(book => book.available);
console.log(areThereAvailableBooks);

const booksByPrice = [...books].sort((a, b) => {
    return Number(a.price.replace("€", "")) - Number(b.price.replace("€", ""))
});
console.log(booksByPrice);

booksByPrice.sort((a, b) => a.available === b.available ? 0 : a.available ? 1 : -1); // Uguale o diverso dagli altri in base all'ordinamento.
console.log(booksByPrice)

// Snack 7° - Analizza i tag
// Usa reduce per creare un oggetto (tagCounts) che conta quante volte 
// ogni tag viene usato tra i libri.

const tagCounts = books.reduce((acc, book) => {
    book.tags.forEach((tag) => {
        if (!acc[tag]) acc[tag] = 0; // Se non esiste.
        return acc[tag]++
    })
   return acc
}, {})

console.log(tagCounts)

const CountTags = () => {
    let CountTagsList = {};
    console.log("Sto Esesguendo la Funzione")
    for (let index = 0; index < books.length; index++) {
        let indexTags = books[index].tags;
        for (const key in indexTags) {
            if (!CountTagsList[indexTags[key]]) CountTagsList[indexTags[key]] = 0;
            CountTagsList[indexTags[key]]++
        }
    }

    const CountLists = Object.entries(CountTagsList).map((obj, value) => {return {[obj[0]]: value}})
    console.log(CountLists)
}

CountTags();