import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function WorkTasks({ tasks, onTaskClick, onDeleteTaskClick }) {
  const navigate = useNavigate();

  // Navega para a página de detalhes da tarefa com título e descrição na URL
  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {/* Mensagem quando não houver tarefas */}
      {tasks.length === 0 && (
        <li className="text-[20px] text-slate-600 text-center">
          Sem tarefas cadastradas
        </li>
      )}

      {tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          {/* Botão para marcar tarefa (risca se concluída) */}
          <button
            onClick={() => onTaskClick(task.id)}
            className={`bg-slate-400 w-full text-left text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>

          {/* Botão para ver detalhes */}
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

export default WorkTasks;
