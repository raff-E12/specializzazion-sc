
// // Prova Di esercitazione con "creaThrottler"


const prod_url = 'https://dummyjson.com/products';
const url_posts = 'https://dummyjson.com/posts';
const url_carts = 'https://dummyjson.com/carts';

const fetch_prod = async () => {
    try {
        const fetch = await axios.get(prod_url);
        const data = fetch;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const fetch_posts = async () => {
    try {
        const fetch = await axios.get(url_posts);
        const data = fetch;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

const fetch_carts = async () => {
    try {
        const fetch = await axios.get(url_carts);
        const data = fetch;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


// function FunSelections() {
//     const list = [fetch_posts, fetch_prod, fetch_carts];

//     list.forEach((operation, index) => {
//         setTimeout(() => {
//             return operation()
//         }, 1500 * index)
//     })
// }

function creaThrottler(callback, limit){
    console.log("Sto eseguendo...")
    let prev = 0; // Tempo trascorso dall'ultima volta
    return function(...arg){
        const now = Date.now(); // Tempo Odierno
        if (now - prev >= limit) {
            prev = now;
            console.log(now,prev);
            callback(...arg);
        } else {
            console.warn("Impossibile seguire la funzione!!")
        }
    }
}

window.addEventListener("DOMContentLoaded", () => {
    const fun_1 = creaThrottler(fetch_prod, 1500);
    const fun_2 = creaThrottler(fetch_posts, 2000);
    const fun_3 = creaThrottler(fetch_carts, 3000);

    fun_1()
    fun_2()
    fun_3()
})
