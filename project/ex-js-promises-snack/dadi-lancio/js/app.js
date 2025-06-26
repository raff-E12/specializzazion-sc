
// Snacks - Le Promises
// Creare con le Promises il Gioco del Lancio dei Dadi.

function lanciaDado() {
    const num = Math.floor(Math.random() * 6);
    console.log("Processo in esecuzione...")
    const process = new Promise((resolve, reject) => {
       setTimeout(() => {
          if (num > 0) {
             resolve("Hai Vinto!!");
          } else {
             reject("Hai Perso!!");
          }
       }, 3000)
    })

    return process
}

lanciaDado().then(win => console.log(win)).catch(lose => console.error(lose))