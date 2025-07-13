import React, { useEffect, useMemo, useReducer, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router';
import ReducerGlobal from '../reducer/ReducerGlobal';

export default function useTasks() {
  const { VITE_API_URL } = import.meta.env;
  const NavigateLink = useNavigate();

  // Nota: Con la UseReducer si cerca di utilizzare un oggetto che raccoglie e usa le quei dati nelle diverse
  // funzioni in precisione.

  let initialState = {
    Tasks: [],
    isCompleted: false,
    DateList: [],
    TaskList: [],
    isAdv: false,
    FormData: {},
    ID: 0,
    isReload: true,
    isDelete: null,
    ShowModal: false,
    isModifyModal: false,
    TaskEdit: [],
    RejectList: []
  }

  const [StateTask, dispatch] = useReducer(ReducerGlobal, initialState);

  async function GetTaskList() {
      try {
          const fetchings = await axios.get(`${VITE_API_URL}/tasks`);
          const data = await fetchings.data;
          dispatch({ type: "SET_TASKS", payload: data});
      } catch (error) {
          console.error(error.message);
      }
  }

  console.log(StateTask)

  function DateListSets() {
   if (StateTask.isCompleted) {
      const ListDate = StateTask.Tasks.map((element) => {
          const DateFormat = String(element.createdAt).replace("T", " ").replace("Z", " ").split(" ");
          return { id: element.id, date: DateFormat }
      })

      // Coppia Chiave valore nel suo confronto primordiale.
      const AlternativeList = Array.from(new Map(ListDate.map(element => [element.id, element])).values());
      dispatch({ type: "SET_DATE_LIST", payload: AlternativeList })
      dispatch({ type: "SET_COMPLETED" })
   }
  }

  async function addTasks() {
    try {
      if (Object.keys(StateTask.FormData).length !== 0) {
        const fetchingPost = await axios.post(`${VITE_API_URL}/tasks`, StateTask.FormData);
        const { success, task } = fetchingPost.data;
        if (success) {
          dispatch({ type: "SET_ADV" });
          dispatch({ type: "RESET_FORM" });
          dispatch({ type: "SET_RELOAD", payload: true });
        }
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  async function RemoveTasks() {
    try {
      if (StateTask.isDelete !== null) {
        const fetchingApi = await axios.delete(`${VITE_API_URL}/tasks/${StateTask.isDelete}`);
        const { success, task } = fetchingApi.data;
        NavigateLink("/");
        if (success) {
          dispatch({ type: "SET_ADV" });
          dispatch({ type: "RESET_DELETE" });
          dispatch({ type: "TOGGLE_MODAL" , payload: false });
          dispatch({ type: "SET_RELOAD", payload: true });
        }
      }
    } catch (error) {
      console.error(error.message)
    }
  }

  async function UpdateTasks() {
     try {
      if (StateTask.Tasks.length !== 0) {
          const idTask = StateTask.TaskEdit[0].id;
          const fetchingApi = await axios.put(`${VITE_API_URL}/tasks/${idTask}`, StateTask.TaskEdit[0]);
          const { success, task } = fetchingApi.data;
          if (success) {
            dispatch({ type: "SET_ADV" });
            dispatch({ type: "SET_RELOAD", payload: true });
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
          dispatch({ type: "SET_ADV"})
          dispatch({ type: "SET_RELOAD", payload: true });
        }

        if (RejectedList.length > 0) {
          dispatch({ type: "SET_ADV"})
          dispatch({ type: "SET_REJECT_LIST", payload: RejectedList})
        }

      }
    } catch (error) {
      console.error(error.message)
    }
  }

  useEffect(() => { GetTaskList() }, [StateTask.isReload]);
  useEffect(() => { addTasks() }, [StateTask.FormData]);
  useEffect(() => { UpdateTasks() }, [StateTask.TaskEdit])

  useMemo(() => { DateListSets() }, [StateTask.isCompleted]);
  useMemo(() => { RemoveTasks() }, [StateTask.isDelete, StateTask.ShowModal]);

  return { 
    ...StateTask,
    dispatch,
    GetTaskList,
    addTasks,
    UpdateTasks,
    RemoveTasks,
    SetID: (id) => dispatch({ type:"SET_ID", payload: id}),
    RemoveMultipleTasks,
    setFormData: (data) => dispatch({ type: "SET_FORM", payload: data }),
    toggleModal: (bool) => dispatch({ type: "TOGGLE_MODAL", payload: bool }),
    toggleModifyModal: (bool) => dispatch({ type: "TOGGLE_MODIFY_MODAL", payload: bool }),
    setEditTask: (task) => dispatch({ type: "SET_EDIT_TASK", payload: task }),
    setDelete: (id) => dispatch({ type: "SET_DELETE", payload: id })
  }
}
