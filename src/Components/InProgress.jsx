import { Form } from "./Form"



export const InProgress = () => {
    const urlGiven = "http://localhost:3000/inprogress";
    return(
        <div>
            <h1>
                In Progress
            </h1>
            <Form urlGiven={urlGiven}/>
        </div>
    )
}