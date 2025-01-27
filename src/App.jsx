import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Logo from './components/Logo'
import Home from './components/Home'
import Dishes from './components/Dishes'
import Ooti from './components/Ooti'
import Thamla from './components/Thamla'
import Chicken from './components/Chicken'
import Naga from './components/Naga'

const router = createBrowserRouter([
  {path:'/', element: <Home/>},
  {path:'/dishes', element: <Dishes/>},
  {path:'/dishes/ooti', element: <Ooti/>},
  {path:'/dishes/thamlapork', element: <Thamla/>},
  {path:'/dishes/nagastylepork', element: <Naga/>},
  {path:'/dishes/chicken', element: <Chicken/>},
])

function App() {
  return <RouterProvider router={router} />;
}

export default App
