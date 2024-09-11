import { useEffect, useState } from "react"
import { Tasks } from "./tasks";
import { CgAdd } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { useTaskLoad } from "../Hook/useTaskLoad";


export const Form = ({ urlGiven, dbsName }) => {
    // const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [hiding, setHiding] = useState(false);

    const {tasks, setTasks} = useTaskLoad([], urlGiven)

    // useEffect(() => {
    //     fetch("http://localhost:3000/tasks")
    //     .then((res) => res.json())
    //     .then((data) => setTasks(data))
    // }, [])
    const inputHandler = (log) => {
        setTitle(log.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();
        if(title.trim() === '') {return alert("Task name can't be empty")}
        const newTask = {
            id: Date.now() + '',
            dbsName: dbsName,
            name: title,
        }
        setTasks([...tasks, newTask]);
        setTitle('');
        setHiding(false);
    }

    const hideHandler = () => {
        setHiding(false);
        setTitle('')
    }

    return (
        <div>
            {hiding === false ? 
                (<button onClick={() => setHiding(true)}><FaPlus /> Add Task</button>) : 
                (<form action="" onSubmit={submitHandler}>
                    <input type="text" placeholder="enter your task name" onChange={inputHandler} value={title}/>
                    <button>Submit</button>
                    <button onClick={hideHandler}>Hide</button>
                </form>)}
                
            <Tasks 
            tasks={tasks}
            setTasks = {setTasks}
            />
        </div>
    )
}