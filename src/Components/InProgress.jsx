import { Form } from "./Form"



export const InProgress = () => {
    const urlGiven = "http://localhost:3000/inprogress";
    const dbsName = "inprogress";
    return(
        <div>
            <h1>
                In Progress
            </h1>
            <Form 
            urlGiven={urlGiven}
            dbsName = {dbsName}
            />
        </div>
    )
}