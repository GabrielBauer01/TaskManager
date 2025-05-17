import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

function HomeTasksOptions() {
  const navigate = useNavigate();

  function goToPersonalTasks() {
    navigate("/personal-tasks");
  }
  function goToWorkTasks() {
    navigate("/work-tasks");
  }
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <div className="mb-4 flex gap-2">
        <h1 className="text-[18px] text-slate-200 font-bold bg-slate-600 rounded-md px-3 py-2 w-full text-left">
          Tasks Pessoais
        </h1>
        <button onClick={goToPersonalTasks} className="text-slate-200 bg-slate-600 rounded-md p-2">
          <ChevronRightIcon />
        </button>
      </div>
      <div className="mb-4 flex gap-2">
        <h1 className="text-[18px] text-slate-200 font-bold bg-slate-600 rounded-md px-3 py-2 w-full text-left">
          Tasks do trabalho
        </h1>
        <button onClick={goToWorkTasks} className="text-slate-200 bg-slate-600 rounded-md p-2">
          <ChevronRightIcon />
        </button>
      </div>
    </div>
  );
}

export default HomeTasksOptions;
