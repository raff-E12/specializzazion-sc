
// Snacks - Le Promises
// Scopo Creare una Funzione che ospita una Promises.

function getPostTitle(id) {
  const fetch_url = `https://dummyjson.com/posts/${id}`;
  const fetching_data = new Promise((resolve, reject) => {
       setTimeout(() => {
        fetch(fetch_url).then(response => response.json())
        .then(posts => {
          const id = posts.id;
          let combination = {};
          fetch(`https://dummyjson.com/users/${id}`).then(response => response.json())
          .then(users => { 
             combination = [{...posts, users: {...users}}];
            //  const integration = GenPosters(combination);
             resolve(combination);
          })
          .catch(error => reject(error))
        })
        .catch(error => reject(error))
       }, 1900);
  })

  return fetching_data
}

function GenPosters(poster) {
  const fragment = document.createDocumentFragment(); // Separazione dal DOM, Prima di essere inseriti nel DOM
  poster.forEach(element => {
    const posters = document.createElement("div");
    posters.className = "user-card";
    let text_node =  `<h2>${element.users.username}</h2>
      <p>Email: ${element.users.email}</p>
      <span class="role">${element.users.role}</span>`;

    posters.innerHTML = text_node;
    fragment.appendChild(posters);
  });
  return fragment
}

const await_fetch = async () => {
  const id_lists = [];
  let timer = 900;
  let posters = [];
  const text_warn = document.getElementById("text-load");
  text_warn.textContent = "Loading...";

  for (let index = 0; index < 3; index++) {
    const id = Math.floor(Math.random() * 12) + 1;
    id_lists.push(id);
  }

  for (let index = 0; index < id_lists.length; index++) {
    const poster = await getPostTitle(id_lists[index]);
    posters.push(poster);
  }

  posters.forEach((post) => {
    const post_gen = GenPosters(post);
    const post_parent = document.querySelector(".user-list");
    post_parent.appendChild(post_gen);
    text_warn.style.display = "none";
  })

  console.log(posters)
};
await_fetch()