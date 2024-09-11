import { Form } from "./Form";
import { Tasks } from "./tasks";
import { useTaskLoad } from "../Hook/useTaskLoad";



export const Ready = () => {
    const urlGiven = "http://localhost:3000/ready";
    const dbsName = "ready/";
    
    return(
        <div>
            <h1>Ready</h1>
            <Form 
            urlGiven={urlGiven}
            dbsName = {dbsName}
            />
        </div>
    )
}