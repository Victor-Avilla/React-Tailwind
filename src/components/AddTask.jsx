import { useState } from "react"

function AddTask({ onAddTaskClick }) {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")



    return <div className="space-y-1 p-6 bg-gray-900 rounded-2xl shadow-2xl flex flex-col mb-5">

        <input type="text" placeholder="Digite o titulo da tarefa" value={title} onChange={(event) => setTitle(event.target.value)} className={`bg-slate-600 text-white p-2 rounded-md w-full text-left`} />
        <input type="text" placeholder="Digite a descrição da tarefa" value={description} onChange={(event) => setDescription(event.target.value)} className={`bg-slate-600 text-white p-2 rounded-md w-full text-left mb-5`} />

        <button onClick={() => {onAddTaskClick(title, description),
            setTitle(""),
            setDescription("")}} className="bg-amber-500 text-white hover:bg-amber-600 mx-auto p-2 rounded-md">Adicionar tarefa</button>

    </div >
}

export default AddTask