import './App.css'
import { Backlog } from './Components/backlog'
import { Finished } from './Components/Finished'
import { InProgress } from './Components/InProgress'
import { Ready } from './Components/Ready'

function App() {

  return (
      <div>
        <h1>Awesome Kanban Project</h1>
        <Backlog />
        <Ready />
        <InProgress />
        <Finished />
      </div>
  )
}

export default App
