import { ChevronRightIcon, X } from "lucide-react"

function Tasks({tasks, onTaskClick, onDeleteTaskClick}) {

    return <ul className="space-y-1 p-6 bg-gray-900 rounded-2xl shadow-2xl ">{tasks.map((task) => (

        <li key={task.id} className="flex gap-1" >

            <button onClick={() => onTaskClick(task.id)} className={`bg-slate-600 text-white p-2 rounded-md w-full text-left ${task.isCompleted && "line-through"}`}>
                {task.title}
            </button>

            <button className="bg-amber-500 text-white p-2 rounded-md hover:bg-amber-600"><ChevronRightIcon /></button>
            <button onClick={() => onDeleteTaskClick(task.id)} className="bg-amber-500 text-white p-2 rounded-md hover:bg-red-600"><X /></button>

        </li>
    ))}</ul >
}

export default Tasks