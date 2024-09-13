import { Form } from "./Form";
import { Tasks } from "./tasks";
import { useTaskLoad } from "../Hook/useTaskLoad";



export const Ready = () => {
    const urlGiven = "http://localhost:3000/ready";
    const dbsName = "ready/";
    
    return(
        <div className="text-left space-y-2">
            <h1 className="text-xl font-bold">Ready</h1>
            <Form 
            urlGiven={urlGiven}
            dbsName = {dbsName}
            />
        </div>
    )
}