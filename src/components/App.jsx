
import Tasks from './Tasks'
import AddTask from './AddTask'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Ler o Corpo Fala",
    description: "Ler 60 paginas",
    isCompleted: false
  },
  {
    id: 2,
    title: "Estudar React",
    description: "Estudar React",
    isCompleted: false
  },
  {
    id: 3,
    title: "Estudar Tailwind",
    description: "Estudar Tailwind",
    isCompleted: false
  }
  ]
  )

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !taskId.isCompleted }
      }
      return task
    })
    setTasks(newTasks)
  }

  return (

    <div className='w-screen h-screen bg-gray-700 flex justify-center p-6'>
      <div className='w-[500px]'>
        <h1 className='text-3xl text-slate-100 font-bold text-center'>Gerenciador de Tarefas</h1>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} />
        <AddTask />
      </div>
    </div>

  )
}

export default App
