
/** 
 * @file Snacks Sulle Funzioni - JS Funzioni e Dichiarazione
 * 
 * - Esercizi:
 * 
 * @function SommaNumeri - Somma di due Numeri (Snack-1)
 * @function quand_fun - Quadrato di un numero (Snack-2)
 * @function eseguiOperazione - Callback con le operazioni (Snack-3)
 * @function creaTimer - Creazione di un Timer (Snack-4)
 * @function stampaOgniSecondo - Stampo in Loop (Snack-5)
 * @function CountAuto - Contatore AutoMatico (Snack-6)
 * @function eseguiEferma - Alternaza di SetTimeout e SetInterval (Snack-7)
 * @function ContoAllaRovescia - Conto all Rovescia (Snack-8)
 * @function sequenzaOperazioni - Gestione delle Operazioni in Funzione (Snack-9)
 * @function creaThrottler - Creazione di uno Throttler (Snack-10)
 * 
 */


// Svolgimento 1

SommaNumeri(23, 14);

function SommaNumeri(num1, num2){
    return console.log(num1 + num2);
}

const fun_ano = SommaNumeri(12, 34);

const arrow_fun = (num1, num2) => {
   return console.log(num1 + num2);
}

arrow_fun(100, 80);

// Svolgimento 2

const quad_fun = (num) => console.log( num * num );
quad_fun(12);

// Svolgimento 3

const add = (a, b) => a + b;
const mod = (a, b) => a * b;

const eseguiOperazione = (num1, num2, op) => { console.log(op(num1, num2)) };

eseguiOperazione(12, 13, add);

// Svolgimento 4

const btn_timer = document.getElementById("timer-btn");
let par_count = document.getElementById("count-par");

const creaTimer = (second) => {
    let count = 0;
    const temp = setInterval(() => {
    count++
    par_count.innerHTML = `Count: ${count}`;
    if (count === 10) {
        setTimeout(() => {
            count = 0;
            par_count.innerHTML = `Tempo scaduto!`;
            clearInterval(temp);
        }, 60);
    }
    }, second)
}

btn_timer.addEventListener("click", () => {
    creaTimer(1200);
});

// Svolgimento 5

const btn_stamp = document.getElementById("btn-stamp");
let pressuere = true;
let temp = null;

const stampaOgniSecondo = (words, press) => {
    if (!press){
        temp = setInterval(() => {
            console.log("Ecco la parola stampata:", words);
        }, 1200)
    }else{
        setTimeout(() => {
            clearInterval(temp);
            console.log("Fine Loop!!");
        }, 500);
    }
}

btn_stamp.addEventListener("click", () => {
    pressuere = !pressuere ? true : false;
    let words = String(window.prompt("Scrivi una parola"));

    if (!isNaN(words)) {
        window.alert("Non è una parola");
        words = String(window.prompt("Scrivi una parola"));
    } else {
       stampaOgniSecondo(words, pressuere);
    }

    console.log(pressuere);
})

// Svoglimento 6

const count_btn = document.getElementById("count-btn");

function CountAuto(words, time) {
    let count = 0;
    let rs = "";
    return () => {
         Idinterval = setInterval(() => {
        count++;
        rs = "Ecco la parola Stampata:" + words;
        console.log(rs);
        if (count === 10) {
            setTimeout(() =>{
                count = 0;
                clearInterval(Idinterval);
                console.log("Fine Loop!!");
            }, 500)
        }
    },time)
    }
}

count_btn.addEventListener("click", () => {
    let words = window.prompt("Scrivi Qualsiasi Cosa Per Eseguirlo in Console:");
    const fun_app =  CountAuto(words, 1200);
    fun_app();
})

// Svolgimento 7

const stop_btn = document.getElementById("stop-btn");

const eseguiEferma = (words, intervallo, durata) => {
    const stamp_Id = setInterval(() => {
        console.log("Stampo in Loop:", words);
    }, intervallo);

    setTimeout(() => {
        clearInterval(stamp_Id);
        console.log("Fine del Loop!!");
    }, durata)
}

stop_btn.addEventListener("click", () => {
    eseguiEferma("Cane e Gatto!!", 1200, 5000);
})

// Svolgimento 8

const btn_asc = document.getElementById("rv-btn");

const contoAllaRovescia = (count) => {
    const temp_id = setInterval(() => {
        count--;
        console.log(count)
        if (count < 0 || count === 0) {
            setTimeout(() => {
            console.log("Tempo scaduto!!");
            clearTimeout(temp_id);
        }, 500)
        }
    }, 1200)
}

btn_asc.addEventListener("click", () => {
    console.log("Inizio Del Conto Alla Rovescia!!");
    contoAllaRovescia(10);
})

// Svolgimento 9

const seq_btn = document.getElementById("seq-btn");

function sequenzaOperazioni (list, time){
    list.forEach((operazioni, index) => {
        setTimeout(() => {
            return operazioni()
        }, time * index)
    });
}

seq_btn.addEventListener("click", () => {
    const fun_1 = () => console.log("Operazione 1");
    const fun_2 = () => console.log("Operazione 2");
    const fun_3 = () => console.log("Operazione 3");
    const fun_4 = () => console.log("Operazione 4");
    const fun_5 = () => console.log("Operazione 5");

    const list_op = [fun_1, fun_2, fun_3, fun_4, fun_5];
    sequenzaOperazioni(list_op, 1200);
});

// Svolgimento 10
const btn_th = document.getElementById("btn-throt");

const returnFun = () => {
    return console.log("Funzione Restituita");
}

const returnFun_2 = () => {
    return console.log("Funzione Restituita, per la seconda volta!!");
}

function creaThrottler(callback, limit){
    console.log("Sto eseguendo...")
    let prev = 0;
    return function(){
        const now = Date.now();

        if (now - prev >= limit) {
            prev = now;
            callback();
        } else {
            console.warn("Impossibile seguire la funzione!!")
        }
    }
}

btn_th.addEventListener("click", () => {
    const throttledFun1 = creaThrottler(returnFun, 1200);
    const throttledFun2 = creaThrottler(returnFun_2, 9300);

    throttledFun1()
    throttledFun2()
});