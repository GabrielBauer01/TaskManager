import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import App2 from "./App2.jsx";
import PersonalTaskPage from "./pages/PersonalTaskPage.jsx";
import Home from "./Home.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/personal-tasks",
    element: <App />,
  },
  {
    path: "/task",
    element: <PersonalTaskPage />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/work-tasks",
    element: <App2 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
