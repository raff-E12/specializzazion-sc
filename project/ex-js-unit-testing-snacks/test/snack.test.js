
// Snacks con le Unit-Test

const { getInitials, createSlug, average, isPalindrome, findPostById } = require("../app.js")

// Raggruppamento dei relativi Test.

describe("Manipolazione Stringhe e Slug", () => {
    // Snack-1
    // La funzione getInitials restituisce le iniziali di un nome completo.

    test('La funzione getInitials restituisce le iniziali di un nome completo.', () => { 
        expect(getInitials("Mario Rossi")).toBe("M.R");
    })

    // Snack-2
    // La funzione createSlug restituisce una stringa in lowercase.
    // La Funzione createSlug sostituzione gli spazi con "-" "."
    // La funzione createSlug lancia un errore se il titolo è vuoto o non valido.

    test("La funzione createSlug restituisce una stringa in lowercase.", () => {
        expect(createSlug("Titolo Grande")).toBe("titolo-grande");
        expect(createSlug("Titolo Grande")).toBe("titolo-grande");
        expect(() => createSlug("")).toThrow("Il Titolo Non Valido");
    })

    // Snack-4
    // La funzione isPalindrome verifica se una stringa è un palindromo.

    test('La funzione isPalindrome verifica se una stringa è un palindromo.', () => { 
        expect(isPalindrome("Anna")).toBeTruthy();
        //    expect(isPalindrome("Mario")).toBeFalsy();
        expect(isPalindrome("Osso")).toBeTruthy();
    })

})

describe("Manipolazione Liste e Oggetti", () => {
    // Snack-3
    // La funzione "averange" calcola la media artimetica di un array di numeri.

    test('La funzione "averange" calcola la media artimetica di un array di numeri', () => { 
        expect(average([1, 2, 3, 4, 5, 6])).toBe(3.5);
        expect(average([10, 20, 30, 40, 50])).toBe(30);
    })

   // Snack-7
   // La funzione findPostById restituisce il post corretto dato l'array di post e l'id

   const posts = [ 
    { id: 1, title: "Introduzione a Javascript", slug: "introduzione-a-javascript"},
    { id: 2, title: "Introduzione a HTML", slug: "introduzione-a-html"},
    { id: 3, title: "Introduzione a CSS", slug: "introduzione-a-css"}]

   test("La funzione findPostById restituisce il post corretto dato l'array di post e l'id", () => { 
      expect(findPostById(posts, 2)).toEqual( { id: 2, title: "Introduzione a HTML", slug: "introduzione-a-html"});
      expect(findPostById(posts, 4)).toEqual(null);
      expect(() => findPostById([36, 32], 4)).toThrow("L'Array Fornito Non è Corretto.");
    })
})


