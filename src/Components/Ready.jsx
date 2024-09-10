import { Form } from "./Form"



export const Ready = () => {
    const urlGiven = "http://localhost:3000/ready";
    return(
        <div>
            <h1>Ready</h1>
            <Form urlGiven={urlGiven}/>
        </div>
    )
}