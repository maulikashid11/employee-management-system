import './App.css'
import Home from './components/Home'
import { createBrowserRouter, Link, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import Pricing from './components/Pricing'
import ContactUs from './components/ContactUs'
import About from './components/About'
import HomePage from './pages/HomePage'
import Login from './components/Login'
import EmployeeDashboard from './components/EmployeeDashboard'
import { EmployeeProvider } from './contexts/EmployeeData'
import AdminDashboard from './components/AdminDashboard'
import Error from './components/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: < HomePage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <ContactUs />
      },
      {
        path: '/pricing',
        element: <Pricing />
      },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/:employeename',
    errorElement: <Error />,
    element: <EmployeeDashboard />
  },
  {
    path: '/admin',
    element: <AdminDashboard />
  },

])

function App() {
  return (
    <>
      <EmployeeProvider>
        {
          <RouterProvider router={router}></RouterProvider>
        }
      </EmployeeProvider>
    </>
  )
}

export default App
