import { ChevronRightIcon } from "lucide-react"

function Tasks(props) {
    console.log(props)
    return <ul className="space-y-1 p-6 bg-slate-400 rounded-2xl shadow">{props.tasks.map((task) => (
        <li key={task.id} className="flex gap-1" >
            <button onClick={() => props.onTaskClick(task.id)} className="bg-slate-500 text-white p-2 rounded-md w-full text-left">
                {task.title}
                {task.isComplited ? "comp" : "imcomp"}
            </button>
            <button className="bg-slate-500 text-white p-2 rounded-md"><ChevronRightIcon /></button></li>
    )
    )}</ul>
}

export default Tasks