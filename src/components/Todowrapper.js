import React, {useState} from "react";
import { Todoform } from "./Todoform";

export const Todowrapper = () => {
    const [todos, setTodos] = useState([])

    const addTodo = (todo) => {
        
    }
    return(
        <div className="TodoWrapper">
            <Todoform/>
        </div>
    )
}

