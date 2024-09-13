import { Form } from "./Form";



export const InProgress = () => {
    const urlGiven = "http://localhost:3000/inprogress";
    const dbsName = "inprogress/";

    return(
        <div className="text-left space-y-2">
            <h1 className="text-xl font-bold">
                In Progress
            </h1>
            <Form 
            urlGiven={urlGiven}
            dbsName = {dbsName}
            />
        </div>
    )
}