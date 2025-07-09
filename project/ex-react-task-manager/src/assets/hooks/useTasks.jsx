import React, { useEffect, useMemo, useState } from 'react'
import axios from "axios"

export default function useTasks() {
  const [Task, SetTask] = useState([]);
  const [isCompleted, setCompleted] = useState(false)
  const [DateList, SetDate] = useState([]);
  const [isAdv, SetAdv] = useState(false);
  const [FormData, SetForm] = useState({});
  const [ID, SetID] = useState(0);
  const { VITE_API_URL } = import.meta.env;

async function GetTaskList() {
    try {
        const fetchings = await axios.get(`${VITE_API_URL}/tasks`);
        const data = await fetchings.data;
        console.log(data)
        SetTask(data)
        SetID(Number(data[data.length - 1].id))
        setCompleted(true)
    } catch (error) {
        console.error(error.message);
    }
  }

  function DateListSets() {
   if (isCompleted) {
     Task.forEach((element) => {
        const DateFormat = String(element.createdAt).replace("T", " ").replace("Z", " ").split(" ");
        SetDate(item => [...item, {id: element.id, date: DateFormat}]);
    })
    setCompleted(false)
   }
  }

  async function addTasks() {
    try {
      if (Object.keys(FormData).length !== 0) {
        console.log("Inviato", FormData);
        const fetchingPost = await axios.post(`${VITE_API_URL}/tasks`, FormData);
        const condition = fetchingPost.data.success;
        if (condition) {
          return SetAdv(true)
        }
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  function RemoveTasks() {
    
  }

  function UpdateTasks() {
    
  }

  useEffect(() => { GetTaskList() }, []);
  useEffect(() => { addTasks() }, [FormData]);
  useMemo(() => { DateListSets() }, [isCompleted]);

  return { Task, DateList, addTasks, RemoveTasks, UpdateTasks, FormData, SetForm, ID, SetID, isAdv, SetAdv }
}
