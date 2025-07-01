
// Scopo del Esercitazione.
/**
 * @this Visualizza-Dati-da-un'API-Pubblica-Semplice:
   @this Obiettivo: Recuperare un elenco di commenti (o testo, o like) da un'API pubblica 
    e visualizzarli come una lista nel DOM.
    @this Esercizio:
    Fai una richiesta fetch all'endpoint /users di JSONPlaceholder.
    Per ogni utente ricevuto, crea un <div> contenente il suo utente e testo.
    Aggiungi questi <div> a un <div> con id "comment-sc" esistente nel DOM.
 * 
 */

    const left_btn = document.getElementById("left");
    const right_btn = document.getElementById("right");
    const skip_index = document.getElementById("skip");
    
    let limit = 10;
    let skip = 12;

    left_btn.addEventListener("click", ()=>{
        skip--;
        if (skip >= 0) {
            skip_index.innerHTML = `<b>Skip:</b> ${skip}`;
            CommentApiBlock();
        }
    })

    right_btn.addEventListener("click", ()=>{
        skip++;
       if (skip <= 20) {
          skip_index.innerHTML = `<b>Skip:</b> ${skip}`;
          CommentApiBlock();
       }
    })
    
    async function CommentApiBlock(){
        try {
            const url = `https://dummyjson.com/comments?limit=${limit}&skip=${skip}&select=body,postId`;
            const parent_element = document.getElementById("comment-sc");

            parent_element.innerHTML =  `<p>Loading..</p>`;

            const fetch_api = await axios.get(url);
            const data = fetch_api.data;
            let array_comment = [];
            let condition = false;

                if (data.length !== 0) {
                    const comments_list = data.comments.forEach(element => { array_comment.push(element)});
                    condition = true;
                    parent_element.innerHTML =  ``;
                }

            console.log(data);
            console.log(array_comment)
            console.log(condition)

            if (condition) {
                
            array_comment.forEach((element, index) => {
                const comments = `<div class="card">
                                    <div class="card-body">
                                        <h2>${element.user.username}</h2>
                                        <p>${element.body}</p>
                                        <div class="container-fluid bottom-card"><b>Likes:</b> ${element.likes}</div>
                                    </div>
                                </div>`;
                parent_element.innerHTML += comments
            })
            } else {
                parent_element.innerHTML = `<p>Lista Vuota.</p>`
            }

        } catch (error) {
            console.log(error);
        }
    }

    window.addEventListener("DOMContentLoaded", () => {
        skip_index.innerHTML = `<b>Skip:</b> ${skip}`;
        CommentApiBlock();
    });

    const btn_close = document.getElementById("btn-show");
    const comment_section = document.getElementById("comment-box");

    btn_close.addEventListener("click", () =>{
        if (!comment_section.classList.contains("close")) {
            comment_section.classList.add("close");
        } else {
            comment_section.classList.remove("close");
        }
    })

    // function PromiseFun() {
    //     let promise = new Promise((revolve, reject) => {
    //         axios.get(url).then(response => {
    //             console.log(response);
    //             console.log("Stato:", response.status);
    //             revolve(response.data);
    //         }).catch(error => {
    //             console.log(error);
    //             reject(console.log("Stato:", error.status));
    //         })
    //     })

    //     return promise
    // }

    // let list = [];
    // PromiseFun().then(element => element.comments.forEach(value => {list.push(value)}));
    // console.log(list)