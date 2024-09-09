import { Link } from "react-router-dom"


export const TaskDetails = ({tasks}) => {
    return(
        <div>
            {tasks?.map((task) => (
                <h2>{task.name}</h2>
            ))}
            <button><Link to={"/"}>Go Back</Link></button>
        </div>
    )
}