import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


export const InProgressTaskDetails = () => {
    const { taskID } = useParams();
    
    const [task, setTask] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/inprogress/${taskID}`)
        .then((res) => res.json())
        .then((data) => {
            setTask(data)
        })
    }, [])
    
    return(
        <div className="bg-cyan-600 w-screen h-screen">
            <h1 className='bg-cyan-500 w-screen h-auto text-center p-5 text-5xl'>Awesome Kanban Project</h1>
            <div className="mx-auto my-auto w-8/12 h-2/3 border border-white mt-5 bg-gray-100 rounded-lg pl-10 flex flex-col justify-between">
                <h1 className="mt-10 font-bold text-4xl">{task?.name}</h1>
                <button className="mb-10 w-32 px-3 py-1 my-2 mr-2 rounded-lg bg-sky-800 text-white hover:bg-violet-600"><Link to={"/"}>Go Back</Link></button>
            </div>
        </div>
    )
}