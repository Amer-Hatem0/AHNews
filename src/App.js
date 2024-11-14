import React, { useEffect, useState } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import Notfound from './components/Notfound/Notfound'
import Product from './components/Product/Product'
import jwtDecode from 'jwt-decode'
import Prodected from './components/Prodected/Prodected'
import Main from './components/Main/Main'
import Cont from './components/Cont/Cont'
import Apple from './components/Apple/Apple'
import TechCrunch from './components/TechCrunch/TechCrunch'
import Business from './components/Business/Business'
import Tesla from './components/Tesla/Tesla'
import Old from './components/Old/Old'
import Temperature from './components/Temperature/Temperature'
import Countries from './components/Countries/Countries'
import Science from './components/Science/Science'
import Health from './components/Health/Health'
import Sports from './components/Sports/Sports'
import Technology from './components/Technology/Technology'
import Entertainment from './components/Entertainment/Entertainment'
import Samsung from './components/Samsung/Samsung'
import Spinner from './components/Spinner/Spinner'
import Sav from './components/Sav/Sav'
import Wish from './components/Wish/Wish'
import fav from './components/Wish/fav'

export default function App() {


  let [user, setUser] = useState(null)
  function getUser() {
    let token = localStorage.getItem('token')
    let usr = jwtDecode(token)
    setUser(usr)
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getUser()
    }
  }, [])
  let routers = createBrowserRouter([
    {
      path: '', element: <Layout user={user} setUser={setUser} />, children: [
        { index: true, element:   <Spinner /> },
        { path: 'register', element: <Register /> },
        { path: 'contact', element: <Cont /> },
        { path: 'login/register', element: <Register /> },
        { path: 'main', element:  <Main />  },
        { path: 'login', element: <Login getUser={getUser} /> },
        { path: 'product', element: <Prodected><Product /></Prodected> },
        { path: 'apple', element: <Prodected><Apple /></Prodected> },
        { path: 'sony', element: <Prodected><TechCrunch /></Prodected> },
        { path: 'Business', element: <Prodected><Business /></Prodected> },
        { path: 'Tesla', element:  <Tesla /> },
        { path: 'Old', element: <Prodected><Old /></Prodected> },
        { path: 'samsung', element: <Prodected><Samsung /></Prodected> },
        { path: 'science', element: <Prodected><Science /></Prodected> },
        { path: 'Sports', element: <Prodected><Sports /></Prodected> },
        { path: 'health', element: <Prodected><Health /></Prodected> },
        { path: 'entertainment', element: <Prodected><Entertainment /></Prodected> },
        { path: 'technology', element: <Prodected><Technology /></Prodected> },
        { path: 'Temperature', element:  <Temperature />  },
        { path: '/:id', element: <Prodected><Countries /></Prodected> },
        { path: 'Temperature/home', element: <Home /> },
        { path: 'sav', element: <Sav /> },
        { path: 'fav', element: <fav /> },
        // { path: '', element: <Spinner /> },  
        { path: '*', element: <Notfound /> },
      ]
      // Countries Science
    }
  ])
  return (
    <RouterProvider router={routers} ></RouterProvider>
  )
}