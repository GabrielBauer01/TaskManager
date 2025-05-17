import { useState } from "react";

// Componente responsável por adicionar uma nova tarefa
function AddTask({ onAddTaskSubmit }) {
  // Estados locais para título e descrição da tarefa
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      {/* Campo para digitar o título da tarefa */}
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      
      {/* Campo para digitar a descrição da tarefa */}
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      
      {/* Botão que valida os campos e chama a função de adicionar tarefa */}
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          onAddTaskSubmit(title, description);
          setTitle("");        // limpa o campo título
          setDescription("");  // limpa o campo descrição
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
