import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/footer/Footer'
import Login from './Pages/Login'
import About from './Pages/About'
import Services from './Pages/Services'

const App = () => {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/><Footer/></>
    },
    {
      path:"/about",
      element:<><Navbar/><About/><Footer/></>
    },
    {
      path:"/services",
      element:<><Navbar/><Services/><Footer/></>
    },
    {
      path:"/blog",
      element:<><Navbar/><Blog/><Footer/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contact/><Footer/></>
    },
    {
      path:"/login",
      element:<Login/>
    },
  ])




  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App