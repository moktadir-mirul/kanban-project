import './App.css'
import { Backlog } from './Components/backlog'
import { Finished } from './Components/Finished'
import { InProgress } from './Components/InProgress'
import { Ready } from './Components/Ready'

function App() {

  return (
      <div className='bg-blue-900'>
        <h1 className='bg-red-800'>Awesome Kanban Project</h1>
        <Backlog />
        <Ready />
        <InProgress />
        <Finished />
      </div>
  )
}

export default App
