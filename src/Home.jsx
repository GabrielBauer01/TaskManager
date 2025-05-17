import HomeTasksOptions from "./components/HomeTasksOptions";

function Home() {
  // Tela inicial do gerenciador de tarefas
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        {/* Título principal */}
        <h1 className="text-[40px] text-slate-100 font-bold text-center">
          Gerenciador de tarefas
        </h1>

        {/* Componente com as opções de escolha das tasks */}
        <HomeTasksOptions />
      </div>
    </div>
  );
}

export default Home;
