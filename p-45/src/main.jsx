import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider, Route,createRoutesFromElements } from "react-router-dom";
import Login from "./components/Login/Login";
import Registration from "./components//Registration/Registration";
import Mainn from "./Mainn.jsx"
import About from "./components/About/About";
import Add from "./components/Add/Add";
import Contact from "./components/Contact/Contact";
import MOU from "./components/MOU/MOU";
import Products from "./components/Products/Products";


const router =createBrowserRouter(
  createRoutesFromElements(
<>
    <Route path="" element={<Mainn/>} />
    <Route path="login" element={<Login />} />
    <Route path="Registration" element={<Registration />} />
    <Route path="About" element={<About />} />
    <Route path="Add" element={<Add/>} />
    <Route path="Contact" element={<Contact/>} />
    <Route path="mainn" element={<MOU />} />
    <Route path="Products" element={<Products/>} />



    {/* <Route path="Registration" element={<Registration />} /> */}

</>

  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router}/>
  </React.StrictMode>,
)
