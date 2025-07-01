
// Script della Todo-List

const InputText = document.getElementById("todo-text");
const BtnAdd = document.getElementById("add-todo-button");
const ParentList = document.getElementById("todo-list");
let indexPosts = 1;

function InputAddText() {
    let valueInput = InputText.value;
    if (valueInput !== "") {
        indexPosts++;
       return GenNote(valueInput, indexPosts) 
    }
}

BtnAdd.addEventListener("click", InputAddText);

const GenNote = (value, index) => {
    const fragmentParent = document.createDocumentFragment();
    let todoItems = document.createElement("li");
    todoItems.id = `post-${index}`;
    todoItems.className = "todo-item";
    const NodeItems = `<span class="task-text">${value}</span>
                <div class="actions">
                    <button class="complete-button">Completato</button>
                    <button class="delete-button">Elimina</button>
                </div>`;
    todoItems.innerHTML = NodeItems;
    setTimeout(() => {
        fragmentParent.appendChild(todoItems);
        ParentList.appendChild(fragmentParent);
    },1200)
}

const ParentInteraction = (e) => {
    const btnClear = e.target.classList.contains("complete-button"); 
    const btnTrash = e.target.classList.contains("delete-button"); // Ricerca del selettore figlio 
    const idPost = e.target.closest("li");
    if (btnClear) {
        idPost.classList.toggle("completed");
    }

    if (btnTrash) {
        ParentList.removeChild(idPost);
    }
}

ParentList.addEventListener("click", (e) => ParentInteraction(e))

