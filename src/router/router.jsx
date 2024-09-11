import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { TaskDetails } from "../Pages/TaskDetails";


export const rootRouter = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/:taskID", element: <TaskDetails />}
])