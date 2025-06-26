
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
             combination = {...posts, users: {...users}};
             resolve(combination);
          })
          .catch(error => reject(error))
        })
        .catch(error => reject(error))
       }, 1900);
  })

  return fetching_data
}

const await_fetch = getPostTitle(4).then(result => console.log(result)).catch(error => console.error(error));