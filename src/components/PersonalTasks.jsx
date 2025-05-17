import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Tasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  // Navega para detalhes da tarefa passando título e descrição na URL
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {/* Caso não tenha tarefas, avisa o usuário */}
      {tasks.length === 0 && (
        <li className="text-[20px] text-slate-600 text-center">
          Sem tarefas cadastradas
        </li>
      )}
      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          {/* Marca tarefa como completa (risca o texto) quando aplicável */}
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>

          {/* Botão que leva aos detalhes da tarefa */}
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <ChevronRightIcon />
          </button>

          {/* Botão para deletar tarefa */}
          <button
            onClick={() => onDeleteTaskClick(task.id)}
            className="bg-slate-400 p-2 rounded-md text-white"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
