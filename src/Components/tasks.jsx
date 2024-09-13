import { Link } from "react-router-dom";


export const Tasks = (props) => {
    const {tasks, setTasks} = props;

    const deleteHandler = (dbs, taskID) => {
        fetch(`http://localhost:3000/${dbs}${taskID}`, 
            {
            method: "DELETE"
        })
        .then(() => {
            fetch(`http://localhost:3000/${dbs}`)
            .then((res) => res.json())
            .then((data) => setTasks(data))
        })
    }

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