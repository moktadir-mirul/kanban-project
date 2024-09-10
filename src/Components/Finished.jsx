import { Form } from "./Form"



export const Finished = () => {
    const urlGiven = "http://localhost:3000/finished";
    return (
        <div>
            <h1>
                Finished
            </h1>
            <Form urlGiven={urlGiven}/>
        </div>
    )
}