import './App.css'
import { Backlog } from './Components/backlog'
import { Finished } from './Components/Finished'
import { InProgress } from './Components/InProgress'
import { Ready } from './Components/Ready'

function App() {

  return (
      <div className="bg-cyan-600 w-screen h-auto sm:h-screen md:h-full">
        <h1 className='bg-cyan-500 w-screen h-auto text-center p-5 text-5xl'>Awesome Kanban Project</h1>
        <div className="mx-auto py-10 sm:mx-10 md:w-3/4 md:h-auto md:m-auto xl:flex xl:mx-auto xl:w-screen xl:justify-evenly xl:p-10">
            <div className='flex flex-col gap-y-4 sm:flex sm:flex-row sm:gap-y-0 xl:gap-x-12 xl:ml-5'>
                <div className="w-64 mx-auto rounded-md border border-white p-5 bg-gray-200 h-auto">
                  <Backlog />
                </div>
                <div className="w-64 mx-auto rounded-md border border-white p-5 bg-gray-200 h-auto">
                  <Ready />
                </div>
            </div>
            <div className='flex flex-col gap-y-4 my-4 sm:flex sm:flex-row sm:my-10 lg:my-24 xl:my-0 xl:gap-x-12 xl:mr-5'>
                <div className="w-64 mx-auto rounded-md border border-white p-5 bg-gray-200 h-auto">
                  <InProgress />
                </div>
                <div className="w-64 mx-auto rounded-md border border-white p-5 bg-gray-200 h-auto">
                  <Finished />
                </div>
            </div>
        </div>
      </div>
  )
}

export default App
