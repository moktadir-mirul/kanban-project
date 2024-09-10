import { Form } from "./Form"


export const Backlog = () => {
    const urlGiven = "http://localhost:3000/backlog";
    return(
        <div>
            <h1>Backlog</h1>
            <Form urlGiven={urlGiven}/>
        </div>
    )
}