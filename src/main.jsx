import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import PersonalTaskPage from "./pages/PersonalTaskPage.jsx";
import Home from "./Home.jsx";
import "./index.css";

// Configura as rotas da aplicação
const router = createBrowserRouter([
  {
    path: "/personal-tasks", // Página das tasks pessoais
    element: <App />,
  },
  {
    path: "/task", // Página de detalhes da task
    element: <PersonalTaskPage />,
  },
  {
    path: "/home", // Tela inicial com opções
    element: <Home />,
  },
  {
    path: "/work-tasks", // Página das tasks do trabalho
    element: <App2 />,
  },
]);

// Renderiza o app na div root, usando StrictMode para alertar sobre práticas recomendadas
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
