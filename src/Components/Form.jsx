import { useState } from "react"
import { Tasks } from "./tasks";



export const Form = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('')
    const inputHandler = (log) => {
        setTitle(log.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        const newTask = {
            id: Date.now() + '',
            name: title,
        }
        setTasks([...tasks, newTask]);
        setTitle('');
    }
    return (
        <div>
            <form action="" onSubmit={submitHandler}>
                <input type="text" placeholder="enter your task name" onChange={inputHandler} value={title}/>
                <button>Submit</button>
                <button>Hide</button>
            </form>
            <Tasks 
            tasks={tasks}/>
        </div>
    )
}