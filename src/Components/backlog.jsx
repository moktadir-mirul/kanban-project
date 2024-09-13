import { Form } from "./Form";



export const Backlog = () => {
    const urlGiven = "http://localhost:3000/backlog";
    const dbsName = "backlog/";

    return(
        <div className="text-left space-y-2">
            <h1 className="text-xl font-bold">Backlog</h1>
            <Form 
            urlGiven={urlGiven}
            dbsName = {dbsName}
            />
        </div>
    )
}