


export const Tasks = ({ tasks }) => {
    return(
        <div>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.name}
                    <button>Delete</button>
                </li>
            ))}
            
        </div>
    )
}