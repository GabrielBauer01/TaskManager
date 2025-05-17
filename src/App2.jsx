import { useEffect, useState } from "react";
import AddWorkTask from "./components/AddWorkTask";
import WorkTasks from "./components/WorkTasks";
import { v4 } from "uuid";

function App2() {
  const [tasks, setTasks] = useState(
  JSON.parse(localStorage.getItem("workTasks")) || []
);

useEffect(() => {
  localStorage.setItem("workTasks", JSON.stringify(tasks));
}, [tasks]);


  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://jsonplaceholder.typicode.com/todos?_limit=10"
  //       );
  //       const data = await response.json();
  //       setTasks(data);
  //     } catch (error) {
  //       console.error("Erro ao buscar tarefas:", error);
  //     }
  //   };

  //   fetchTasks();
  // }, []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

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
        <AddWorkTask onAddTaskSubmit={onAddTaskSubmit} />
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
