import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { EmployeeProvider } from './contexts/EmployeeData.jsx'
import Home from './components/Home'
import Pricing from './components/Pricing'
import ContactUs from './components/ContactUs'
import About from './components/About'
import Login from './components/Login'
import EmployeeDashboard from './components/EmployeeDashboard'
import AdminDashboard from './components/AdminDashboard'
import Error from './components/Error'
import App from './App.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: < App />,
    errorElement: <Error />,
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
    element: <EmployeeDashboard />
  },
  {
    path: '/admin',
    element: <AdminDashboard />
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EmployeeProvider>
      <RouterProvider router={router} />
    </EmployeeProvider>
  </StrictMode>,
)
