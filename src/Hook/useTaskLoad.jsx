import { useEffect, useState } from "react"



export const useTaskLoad = (initValue, url) => {
        const [tasks, setTasks] = useState(initValue);

        useEffect(() => {
            fetch(url)
            .then((res) => res.json())
            .then((data) => setTasks(data))
        }, [])
        return {
            tasks,
            setTasks
        }
}