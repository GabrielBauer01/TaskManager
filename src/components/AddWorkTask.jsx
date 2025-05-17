import { useState } from "react";

// Componente para adicionar tarefas de trabalho
function AddWorkTask({ onAddTaskSubmit }) {
  // Estados locais para armazenar o título e a descrição da tarefa
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      {/* Campo de entrada para o título da tarefa */}
      <input
        type="text"
        placeholder="Digite o titulo da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      
      {/* Campo de entrada para a descrição da tarefa */}
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      
      {/* Botão que valida os campos e dispara a função para adicionar tarefa */}
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }

          // Envia os dados da nova tarefa para o componente pai
          onAddTaskSubmit(title, description);

          // Limpa os campos após o envio
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddWorkTask;
