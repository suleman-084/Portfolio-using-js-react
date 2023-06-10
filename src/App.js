import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Screens/Home";
import ProjectScreen from "./Screens/ProjectScreen";
import BlogScreen from "./Screens/BlogScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Project",
    element: <ProjectScreen />,
  },
  {
    path: "/Blog",
    element: <BlogScreen />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
