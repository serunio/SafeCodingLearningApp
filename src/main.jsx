import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {CodingSpace} from "./Components/CodingSpace/CodingSpace.jsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TopicsScreen from "./Components/Topics/TopicsScreen/TopicsScreen.jsx";
import ExercisesScreen from "./Components/Exercises/ExercisesScreen/ExercisesScreen.jsx";

const router = createBrowserRouter([
    {path: "/", element: <App/>},
    {path: "/code", element: <CodingSpace/>},
    {path: "/menu", element: <TopicsScreen/>},
    {path: "/ex", element: <ExercisesScreen/>},
    {path: "/menu/:topic/:id", element: <CodingSpace/>},
    {path: "/menu/:topic", element: <ExercisesScreen/>},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
