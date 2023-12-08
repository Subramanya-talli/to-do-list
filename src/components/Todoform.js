import React , {useState} from 'react';



export const Todoform = () => {
    return(
        <form className='Todoform'>
            <input type='text' className='todo-input' placeholder='what is the task today?'/>
            <button type='submit' className='todo-btn' >Add Task</button>
        </form>
    )
}
