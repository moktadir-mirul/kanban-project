import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { TaskDetails } from "../Pages/TaskDetails";
import { ReadyTaskDetails } from "../Pages/ReadyTask";
import { FinishedTaskDetails } from "../Pages/FinishedTask";
import { InProgressTaskDetails } from "../Pages/InProgressTask";


export const rootRouter = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/backlog/:taskID", element: <TaskDetails />},
    {path: "/ready/:taskID", element: <ReadyTaskDetails />},
    {path: "/finished/:taskID", element: <FinishedTaskDetails />},
    {path: "/inprogress/:taskID", element: <InProgressTaskDetails />}
])