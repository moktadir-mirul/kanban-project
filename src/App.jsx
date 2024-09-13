import './App.css'
import { Backlog } from './Components/backlog'
import { Finished } from './Components/Finished'
import { InProgress } from './Components/InProgress'
import { Ready } from './Components/Ready'

function App() {

  return (
      <div className="bg-cyan-600 w-screen h-screen">
        <h1 className='bg-cyan-500 w-screen h-auto text-center p-5 text-5xl'>Awesome Kanban Project</h1>
        <div className="flex justify-around mx-auto my-10">
          <div className="w-64 mx-auto rounded-md border border-white p-5 bg-gray-200 h-auto">
            <Backlog />
          </div>
          <div className="w-64 mx-auto rounded-md border border-white p-5 bg-gray-200 h-auto">
            <Ready />
          </div>
          <div className="w-64 mx-auto rounded-md border border-white p-5 bg-gray-200 h-auto">
            <InProgress />
          </div>
          <div className="w-64 mx-auto rounded-md border border-white p-5 bg-gray-200 h-auto">
            <Finished />
          </div>
        </div>
      </div>
  )
}

export default App
