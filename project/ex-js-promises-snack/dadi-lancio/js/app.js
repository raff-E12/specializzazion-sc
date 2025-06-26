
// Snacks - Le Promises
// Creare con le Promises il Gioco del Lancio dei Dadi.

function lanciaDado() {
    const interruption = Math.random() < 0.2;
    console.log("Processo in esecuzione...")
    const process = new Promise((resolve, reject) => {
       setTimeout(() => {
          if (interruption) {
             reject("Il Dado è Incastrato!!, Riprova.");
          } else {
             const num = Math.floor(Math.random() * 6);
             if (num > 0) {
                resolve("Hai Vinto");
             } else {
                reject("Hai Perso!!");
             }
          }
       }, 3000)
    })

    return process
}

lanciaDado().then(win => console.log(win)).catch(lose => console.error(lose))