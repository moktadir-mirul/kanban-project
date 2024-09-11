import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export const TaskDetails = () => {
    const { taskID } = useParams();
    console.log(useParams());
    
    const [task, setTask] = useState();
    useEffect(() => {
        fetch(`http://localhost:3000/${taskID}`)
        .then((res) => res.json())
        .then((data) => {
            setTask(data)
        })
    }, [])
    
    return(
        <div>
            <h1>{task?.name}</h1>
            <button><Link to={"/"}>Go Back</Link></button>
        </div>
    )
}