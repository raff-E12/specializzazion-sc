
// Progetto - 3.
// Creazione di una calcolatrice semplice e in extra integrazione API (Conversione Valuta).

const display = document.getElementById("display");
const btns = document.querySelectorAll(".button");
const back = document.getElementById("Back");
const clear = document.getElementById("Reset");
const result = document.getElementById("Result");
const values = document.getElementById("Values");


function ValuesAll(btns, display) {
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            let value = btn.dataset.value;
            display.value += value;
        });
    });
}

ValuesAll(btns, display);

back.addEventListener("click", () => {
    display.value = display.value.slice(0, -1);
});

clear.addEventListener("click", ()=>{
    display.value = "";
})

result.addEventListener("click", ()=>{
    const results = String(display.value);
    const evals = eval(results);
    display.value = evals;
})

values.addEventListener("click", ()=>{
    const numbers = Number(display.value);
    const euro_conversion = numbers.toLocaleString("it-IT", { style: "currency", currency: "EUR"});
    display.value = euro_conversion;
})