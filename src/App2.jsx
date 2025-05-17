import { useEffect, useState } from "react";
import AddWorkTask from "./components/AddWorkTask";
import WorkTasks from "./components/WorkTasks";
import { v4 } from "uuid";

function App2() {
  // Inicializa as tarefas do trabalho com o que tiver salvo no localStorage ou vazio
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("workTasks")) || []
  );

  // Sempre que as tasks mudarem, atualiza o localStorage pra persistir os dados
  useEffect(() => {
    localStorage.setItem("workTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Alterna o status da tarefa (completada ou não)
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  // Remove tarefa com o id passado
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  // Cria e adiciona nova tarefa à lista
  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Tasks do trabalho
        </h1>

        {/* Form para adicionar novas tarefas de trabalho */}
        <AddWorkTask onAddTaskSubmit={onAddTaskSubmit} />

        {/* Lista das tarefas do trabalho */}
        <WorkTasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App2;
