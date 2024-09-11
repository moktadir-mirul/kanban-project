import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export const ReadyTaskDetails = () => {
    const { taskID } = useParams();
    
    const [task, setTask] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/ready/${taskID}`)
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