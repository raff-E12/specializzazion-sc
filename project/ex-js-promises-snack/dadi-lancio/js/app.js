
// Snacks - Le Promises
// Creare con le Promises il Gioco del Lancio dei Dadi.

function CrealanciaDado() {
    let num_prev = null;

    return function(){
    const interruption = Math.random() < 0.2;
    console.log("Processo in esecuzione...")
    const process = new Promise((resolve, reject) => {
       setTimeout(() => {
          if (interruption) {
             num_prev = null;
             reject("Il Dado è Incastrato!!, Riprova.");
          } else {
             const num = Math.floor(Math.random() * 6);
             if (num > 0) {
                if (num === num_prev) {
                    console.log("Incredibile!!");
                }
                num_prev = num;
                resolve("Hai Vinto");
             } else {
                reject("Hai Perso!!");
             }
          }
       }, 3000)
    })

    return process
    }
}

const refresh_fun = CrealanciaDado();

refresh_fun().then(win => {
     console.log(win);
    refresh_fun().then(win => {console.log(win)
    }).catch(lose => console.error(lose));
    
}).catch(lose => console.error(lose));