import { useEffect, useState } from "react"
import { Tasks } from "./tasks";
import { CgAdd } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";


export const Form = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [hiding, setHiding] = useState(false);

    useEffect(() => {
        fetch("http://localhost:3000/tasks")
        .then((res) => res.json())
        .then((data) => setTasks(data))
    }, [])
    const inputHandler = (log) => {
        setTitle(log.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(title.trim() === '') {return alert("Task name can't be empty")}
        const newTask = {
            id: Date.now() + '',
            name: title,
        }
        setTasks([...tasks, newTask]);
        setTitle('');
        setHiding(false);
    }

    return (
        <div>
            {hiding === false ? 
                (<button onClick={() => setHiding(true)}><FaPlus /> Add Task</button>) : 
                (<form action="" onSubmit={submitHandler}>
                    <input type="text" placeholder="enter your task name" onChange={inputHandler} value={title}/>
                    <button>Submit</button>
                    <button onClick={() => setHiding(false)}>Hide</button>
                </form>)}
                
            <Tasks 
            tasks={tasks}
            setTasks = {setTasks}
            />
        </div>
    )
}