import { useEffect, useState } from "react";
import AddPersonalTask from "./components/AddPersonalTask";
import PersonalTasks from "./components/PersonalTasks";
import { v4 } from "uuid";

function App() {
  // Inicializa as tarefas com o que estiver salvo no localStorage ou um array vazio
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("personalTasks")) || []
  );

  // Atualiza o localStorage sempre que as tasks mudam
  useEffect(() => {
    localStorage.setItem("personalTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Alterna o status de 'completada' da tarefa clicada
  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  // Remove tarefa pelo id
  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  // Adiciona nova tarefa com id único, título e descrição
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
          Tasks Pessoais
        </h1>

        {/* Componente para adicionar novas tarefas */}
        <AddPersonalTask onAddTaskSubmit={onAddTaskSubmit} />

        {/* Lista de tarefas com callbacks para clique e exclusão */}
        <PersonalTasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
