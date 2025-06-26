
// Snacks - Le Promises
// Scopo Creare una Funzione che ospita una Promises.

function getPostTitle(id) {
  const fetch_url = `https://dummyjson.com/posts/${id}`;
  const fetching_data = new Promise((resolve, reject) => {
       setTimeout(() => {
        fetch(fetch_url).then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
       }, 1900);
  })

  return fetching_data
}

function getPost(id) {
  const fetch_url = `https://dummyjson.com/users/${id}`;
  const fetching_data = new Promise((resolve, reject) => {
       setTimeout(() => {
         fetch(fetch_url).then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
       }, 1900);
  })

  return fetching_data
}

const await_fetch = getPostTitle(4).then(result => {
    let id = result.id;
    getPost(id).then(result => console.log(result)).
    catch(error => console.error(error)); 
}).catch(error => console.error(error));