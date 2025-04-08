import React, { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { EmployeeContext } from '../contexts/EmployeeData'

const AdminHome = () => {
    const navigate = useNavigate()
    const [employees, setEmployees, admin, loggedIn, setLoggedIn] = useContext(EmployeeContext)
    useEffect(() => {
        if (!loggedIn) {
            navigate('/user/login')
            return
        }
        localStorage.setItem('employees', JSON.stringify(employees))
    }, [])
    const logout = (e) => {
        if (loggedIn === 'admin') {
            setLoggedIn(null)
            localStorage.setItem('loggedIn', null)
            navigate('/')
        }
    }
    return (
        <main className='w-full min-h-screen p-5 bg-zinc-900 text-white'>
            <div className='mb-10 flex items-center justify-between'>
                <h1 className=' text-3xl font-bold'><span className='font-normal'>Hello</span>, Admin 👋</h1>
                <button onClick={(e) => { logout(e) }} className='cursor-pointer bg-red-500 font-bold p-2 text-xl rounded-md'>Logout</button>
            </div>
            <Outlet />
        </main>
    )
}

export default AdminHome