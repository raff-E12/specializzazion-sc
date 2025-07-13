import React from 'react'

export default function ReducerGlobal(state, action) {
    switch (action.type) {
        case "SET_TASKS":
        return {
            ...state,
            Tasks: action.payload,
            isCompleted: true,
            ID: Number(action.payload[action.payload.length - 1].id),
            TaskList: action.payload,
            isReload: false
        };

        case "SET_DATE_LIST":
        return { ...state, DateList: action.payload };

        case "SET_ADV":
        return {...state, isAdv: true};

        case "FORMAT_ADV":
        return {...state, isAdv: action.payload};

        case "SET_FORM":
        return { ...state, FormData: action.payload };

        case "RESET_FORM":
        return { ...state, FormData: {}, ID: 0 };

        case "SET_ID":
        return { ...state, ID: action.payload};
        
        case "SET_DELETE":
        return { ...state, isDelete: action.payload };

        case "RESET_DELETE":
        return { ...state, isDelete: null };

        case "TOGGLE_MODAL":
        return { ...state, ShowModal: action.payload };

        case "TOGGLE_MODIFY_MODAL":
        return { ...state, isModifyModal: action.payload };

        case "SET_EDIT_TASK":
        return { ...state, TaskEdit: action.payload };

        case "SET_REJECT_LIST":
        return { ...state, RejectList: action.payload };

        case "SET_RELOAD":
        return { ...state, isReload: action.payload };

        case "SET_COMPLETED":
        return { ...state, isCompleted: false };
    
        default:
        return state
    }
}
