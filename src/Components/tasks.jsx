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
                <li className="space-x-4" key={task.id}>
                    <Link to={`/${task.dbsName}${task.id}`}><span className="font-bold text-lg hover:bg-gray-400">{task.name}</span></Link>
                    <button className="px-3 py-1 my-2 mr-2 rounded-lg bg-sky-800 text-white hover:bg-violet-600" onClick={() => deleteHandler(task.dbsName, task.id)}>Delete</button>
                </li>
            ))}
        </div>
    )
}