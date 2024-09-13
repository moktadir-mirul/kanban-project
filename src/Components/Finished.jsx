import { Form } from "./Form";





export const Finished = () => {
    const urlGiven = "http://localhost:3000/finished";
    const dbsName = "finished/";

    return (
        <div className="text-left space-y-2">
            <h1 className="text-xl font-bold">
                Finished
            </h1>
            <Form 
            urlGiven={urlGiven}
            dbsName = {dbsName}
            />
        </div>
    )
}