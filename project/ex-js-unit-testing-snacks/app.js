
// Snacks con le Unit-Test

// Snack-1
// La funzione getInitials restituisce le iniziali di un nome completo.
 
function getInitials(NomeCompleto) {
    let stringDivided = String(NomeCompleto).split(" ");
    return `${stringDivided[0].charAt(0).toUpperCase()}.${stringDivided[1].charAt(0).toUpperCase()}`
}

// Snack-2
// La funzione createSlug restituisce una stringa in lowercase.

function createSlug(Words) {
    if (!Words) throw new Error("Il Titolo Non Valido");
    const expression = /[^A-Z-a-z]/sgi
    let WordLowerCase = String(Words).toLowerCase().replace(expression, "-");
    return WordLowerCase
}


// Snack-3
// La funzione "averange" calcola la media artimetica di un array di numeri.

function average(array) {
    array.forEach(element => {
        if ((isNaN(element))) {
            throw new Error("Nella Lista Non ci Devono Essere Numeri");
        }
    });
    const SumList = [...array].reduce((acc, element) => acc + element, 0);
    return SumList / array.length
}

// Snack-5
// La funzione isPalindrome verifica se una stringa è un palindromo.

function isPalindrome(words) {
    if (typeof words !== "string") throw new Error("Non è una Striga");
    const palindromoWords = String(words).split("").reverse().join("");
    if (palindromoWords.toLowerCase() !== words.toLowerCase()) throw new Error("Non sono Corrispondenti");
    return palindromoWords
}

// Snack-7
// La funzione findPostById restituisce il post corretto dato l'array di post e l'id

function findPostById(posts, id) {
    if (isNaN(id)) throw new Error("Non è un ID corretto");
    posts.forEach(element => {
        if (element.id === undefined || element.title === undefined || element.slug === undefined) throw new Error("L'Array Fornito Non è Corretto.")
    });
    return [...posts].find(post => post.id === id) || null
}

module.exports = { getInitials, createSlug, average, isPalindrome, findPostById }