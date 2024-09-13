import { Link } from "react-router-dom";
import { TaskDetails } from "../Pages/TaskDetails";
import { useEffect, useState } from "react";


export const Tasks = (props) => {
    const {tasks, setTasks, urlGiven} = props;

    // const [allTasks, setAllTasks] = useState(tasks)
    console.log(urlGiven)
    // const deleteHandler = (taskID) => {
    //     const updatedArr = tasks.filter((item) => item.id !== taskID);
    //     setTasks(updatedArr);
    // }
    const getAllTasks = () => {
        fetch(urlGiven)
        .then((res) => res.json)
        .then((data) => setTasks(data))
    }
    useEffect(() => {
        getAllTasks();
    }, [])
    
    const deleteHandler = (dbs, taskID) => {
        fetch(`http://localhost:3000/${dbs}${taskID}`, 
            {
            method: "DELETE"
        })
        .then(() => {
            getAllTasks()
        })
    }

    console.log(tasks, "tasks");
    

    return(
        <div>
            {tasks?.map((task) => (
                <li key={task.id}>
                    <Link to={`/${task.dbsName}${task.id}`}>{task.name}</Link>
                    <button onClick={() => deleteHandler(task.dbsName, task.id)}>Delete</button>
                </li>
            ))}
        </div>
    )
}