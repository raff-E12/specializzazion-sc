import React, {useState} from "react"

function TodoList(){
    //nominazione delle possibili variabili di riferimento con in riferimento al hook "useState"
    const [task, setTasks] = useState([]);
    const [newtask, setNewTask] = useState("");

    function handleInputChange(e){   
        //tracciamento dell'evento in input
        setNewTask(e.target.value);
    }

    function addTask() {
        //con lo spread operator si aggiunge all'array il valore in input
        if (newtask.trim() !== "") {
        setTasks(task => [...task, newtask]);
        setNewTask(""); 
        }
    }

    function deleteTask(index) {
        //crea un filtro basato sulla rimoazione del array esistente
        const updatetask = task.filter((_, i)=> i !== index);
        setTasks(updatetask);
    }

    function MoveTaskUp(index) {
        if (index > 0) {
            const updatetasks = [...task];
            //in questa sezione c'è un inversione di un array basata sulla lista presente per il segunte scambio impostato.
            [updatetasks[index], updatetasks[index-1]] = [updatetasks[index-1], updatetasks[index]];
            setTasks(updatetasks);
        }
    }

    function MoveTaskDown(index) {
        if (index < task.length-1) {
            const updatetasks = [...task];
             //in questa sezione c'è un inversione di un array basata sulla lista presente per il segunte scambio impostato.
            [updatetasks[index], updatetasks[index+1]] = [updatetasks[index+1], updatetasks[index]];
            setTasks(updatetasks);
        }
    }

    return(<>
    <div className="to-do-list-box container-fluid">
        <h1>To do List.</h1>
        <div className="box-inp">
            <input type="text" placeholder="Enter Task.."  value={newtask} onChange={handleInputChange}/>
            <button className="btn-add" onClick={addTask}>Add Task</button>
        </div>
        <ol className="list-imp">
            {task.map((element, index)=> <li key={index}><p className="text">{element}</p> 
            <button className="delete-btn" onClick={()=>deleteTask(index)}>Delete</button>
            <button className="up-btn" onClick={()=>MoveTaskUp(index)}>Up</button>
            <button className="down-btn" onClick={()=>MoveTaskDown(index)}>Down</button>
            </li>)}
        </ol>
    </div>
    </>)
    //map() = serve a modificare un array esistente partendo dall'integrzione del html fino ai suoi eventi.
}

export default TodoList