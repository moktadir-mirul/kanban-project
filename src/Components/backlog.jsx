import { Form } from "./Form"


export const Backlog = () => {
    const urlGiven = "http://localhost:3000/backlog";
    const dbsName = "backlog";
    return(
        <div>
            <h1>Backlog</h1>
            <Form 
            urlGiven={urlGiven}
            dbsName = {dbsName}
            />
        </div>
    )
}