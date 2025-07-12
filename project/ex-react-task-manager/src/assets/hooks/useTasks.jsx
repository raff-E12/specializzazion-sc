import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';

export default function useTasks() {
  const [Task, SetTask] = useState([]); // Lista Task
  const [isCompleted, setCompleted] = useState(false);
  const [DateList, SetDate] = useState([]); // Lista Date Formatate
  const [TaskList, setListTask] = useState([])

  const [isAdv, SetAdv] = useState(false); // Alternanza del messaggio di avviso
  const [FormData, SetForm] = useState({}); // Campo dati Estratto dal FormData
  const [ID, SetID] = useState(0); // ID di Aggiunta all'oggetto creato

  const [isDelete, setDelete] = useState(null);
  const [ShowModal, SetShowModal] = useState(false);
  const { VITE_API_URL } = import.meta.env;
  const NavigateLink = useNavigate();

  const [isModifyModal, setModifyModal] = useState(false);
  const [TaskEdit, setEditTask] = useState([]);
  const [RejectList, setRejectList] = useState([])

async function GetTaskList() {
    try {
        const fetchings = await axios.get(`${VITE_API_URL}/tasks`);
        const data = await fetchings.data;
        SetTask(data)
        SetID(Number(data[data.length - 1].id))
        setCompleted(true)
        setListTask(data);
    } catch (error) {
        console.error(error.message);
    }
  }

  function DateListSets() {
   if (isCompleted) {
      Task.forEach((element) => {
          const DateFormat = String(element.createdAt).replace("T", " ").replace("Z", " ").split(" ");
          SetDate(item => [...item,{id: element.id, date: DateFormat}]);
      })
   }
  }

  // Serve a togliere dupplicati in modo che le 
  // chiavi posso essere confrontate da lasciare solo valori unici.
  const PreventDupplication = useMemo(() => { 
    const AlternativeList = Array.from(new Map(DateList.map(item => [item.id, item])).values()); // Conversione in un array.
    SetDate(AlternativeList)
    setCompleted(false)  
  }, [isCompleted]);

  async function addTasks() {
    try {
      if (Object.keys(FormData).length !== 0) {
        const fetchingPost = await axios.post(`${VITE_API_URL}/tasks`, FormData);
        const { success, task } = fetchingPost.data;
        if (success) {
          SetID(0)
          SetAdv(true)
          SetTask(items => [...items, task]);
          GetTaskList();
        }
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  async function RemoveTasks() {
    try {
      if (isDelete !== null) {
        const fetchingApi = await axios.delete(`${VITE_API_URL}/tasks/${isDelete}`);
        const { success, task } = fetchingApi.data;
        NavigateLink("/");
        if (success) {
          SetAdv(true);
          setDelete(null);
          SetShowModal(false);
          SetTask(task => task.filter(item => item.id !== ID));
        }
      }
    } catch (error) {
      console.error(error.message)
      setDelete(null)
    }
  }

  async function UpdateTasks() {
     try {
      if (Task.length !== 0) {
          const idTask = TaskEdit[0].id;
          const fetchingApi = await axios.put(`${VITE_API_URL}/tasks/${idTask}`, TaskEdit[0]);
          const { success, task } = fetchingApi.data;
          if (success) {
            SetAdv(true)
            GetTaskList()
          }
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  async function PromisesTasksAll(url, id) {
    try {
      const fetchingApi = await axios.delete(`${url}/tasks/${id}`);
      const { success, task } = fetchingApi.data;
      return success
    } catch (error) {
      console.error(error.message)
    }
  }

  async function RemoveMultipleTasks(TaskId) {
    try {
      if (TaskId.length !== 0) {
        const PromiseAlls = TaskId.map(id => PromisesTasksAll(VITE_API_URL, id));
        const results = await Promise.allSettled(PromiseAlls);
        console.log(results)

        const fullFieldList = [];
        const RejectedList = [];

        results.forEach((items, index) => {
          const itemsId = TaskId[index]
          if (items.status === "fulfilled" && items.value) {
             fullFieldList.push(itemsId);
          } else {
            RejectedList.push(itemsId);
          }
        })

        if (fullFieldList.length > 0) {
          SetAdv(true)
          GetTaskList();
        }

        if (RejectedList.length > 0) {
          SetAdv(true)
          setRejectList(RejectedList);
        }

      }
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => { GetTaskList() }, []);
  useEffect(() => { addTasks() }, [FormData]);
  useEffect(() => { UpdateTasks() }, [TaskEdit])

  useMemo(() => { DateListSets() }, [isCompleted]);
  useMemo(() => { RemoveTasks() }, [isDelete, ShowModal]);

  return { Task, SetTask, DateList, addTasks, RemoveTasks, UpdateTasks, 
    FormData, SetForm, ID, SetID, isAdv, SetAdv, isDelete, setDelete, 
    ShowModal, SetShowModal, TaskList, RemoveMultipleTasks, RejectList,
    isModifyModal, setModifyModal,TaskEdit, setEditTask }
}
