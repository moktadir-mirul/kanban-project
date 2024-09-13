import { useEffect, useState } from "react"
import { Tasks } from "./tasks";
import { CgAdd } from "react-icons/cg";
import { FaPlus } from "react-icons/fa";
import { useTaskLoad } from "../Hook/useTaskLoad";


export const Form = ({urlGiven, dbsName}) => {
    // const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');
    const [hiding, setHiding] = useState(false);

    const {tasks, setTasks} = useTaskLoad([], urlGiven)

    const inputHandler = (log) => {
        setTitle(log.target.value);
    }
    
    const getAllTasks = () => {
        fetch(urlGiven)
        .then((res) => res.json())
        .then((data) => setTasks(data))
    }
    
    useEffect(() => {
        getAllTasks();
    }, [])

    const submitHandler = (event) => {
        event.preventDefault();
        if(title.trim() === '') {return alert("Task name can't be empty")}
        const newTask = {
            id: Date.now() + '',
            dbsName: dbsName,
            name: title,
        }
        fetch(urlGiven, {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: {'content-type' : 'application/json'}
        })
        .then(() => {
            getAllTasks()
        })
        setTitle('');
        setHiding(false);
    }

    const hideHandler = () => {
        setHiding(false);
        setTitle('')
    }

    return (
        <div className="space-y-2">
            {hiding === false ? 
                (<button onClick={() => setHiding(true)} className="flex w-44 h-7 justify-start items-center space-x-4 hover:bg-gray-300 hover:rounded-md hover:py-4"><FaPlus /> <span>Add Task</span></button>) : 
                (<form action="" onSubmit={submitHandler}>
                    <input className="indent-1 h-8 rounded-md placeholder:font-sans" type="text" placeholder="Enter your task name" onChange={inputHandler} value={title}/>
                    <button className="px-3 py-1 my-2 mr-2 rounded-lg bg-sky-800 text-white hover:bg-violet-600">Submit</button>
                    <button className="px-3 py-1 my-2 mr-2 rounded-lg bg-sky-800 text-white hover:bg-violet-600" onClick={hideHandler}>Hide</button>
                </form>)}

                <Tasks 
                tasks={tasks}
                setTasks = {setTasks}
                urlGiven = {urlGiven}
                />
        </div>
    )
}