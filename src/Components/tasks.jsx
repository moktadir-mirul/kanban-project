import { Link } from "react-router-dom";
import { TaskDetails } from "../Pages/TaskDetails";
import { useState } from "react";


export const Tasks = (props) => {
    const {tasks, setTasks} = props;
    const [pageHiding, setPageHiding] = useState(false);

    const deleteHandler = (taskID) => {
        const updatedArr = tasks.filter((item) => item.id !== taskID);
        setTasks(updatedArr);
    }
    return(
        <div>
            {tasks.map((task) => (
                <li key={task.id}>
                    <Link to={"/details"}>{task.name}</Link>
                    <button onClick={() => deleteHandler(task.id)}>Delete</button>
                </li>
            ))}
            {pageHiding ? (<TaskDetails tasks={tasks} />) : (<p style={{display: "none"}}>none</p>)}
        </div>
    )
}