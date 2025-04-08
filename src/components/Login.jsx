import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { EmployeeContext } from '../contexts/EmployeeData'

const Login = () => {
    const [details, setDetails] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()
    const [employees, setEmployees, admin, loggedIn, setLoggedIn] = useContext(EmployeeContext)
    const [error, setError] = useState('')

    useEffect(() => {
        if (loggedIn !== 'admin') {
            let employee = employees.find((employee) => employee.name === loggedIn)
        } else {
            navigate("/dashboard/admin")
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        let employee = employees.find((employee) => employee.email === details.email)
        if (employee) {
            if (employee.email === details.email && employee.password == details.password && employee.id !== 12345) {
                setLoggedIn(employee.name)
                localStorage.setItem('loggedIn', JSON.stringify(employee.name))
                navigate(`/employee/${employee.name}`)
            }
        } else if (details.email === admin.email && details.password === admin.password) {
            setLoggedIn('admin')
            localStorage.setItem('loggedIn', JSON.stringify('admin'))
            navigate("/dashboard/admin")
        } else {
            setError('Something went wrong')
            setDetails({
                email: '',
                password: ''
            })
        }

    }
    const handleChange = (e) => {
        setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
        setError('')
    }
    return (
        <main className='w-full min-h-screen flex items-center justify-center flex-col bg-zinc-900 text-white'>
            <Link className='absolute top-10 left-10 text-blue-500' to="/">Go Back</Link>
            {
                error && <p className='bg-red-500 absolute p-2 top-2 right-2 rounded-md '>Something went wrong!</p>
            }
            <h1 className='text-3xl font-bold mb-5'>Login</h1>
            <form action="" onSubmit={(e) => { handleSubmit(e) }} className='border-1 border-green-700 flex flex-col justify-center rounded-lg p-5'>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email:</label>
                    <input required onChange={(e) => handleChange(e)} value={details.email} className='border border-zinc-600 rounded-md mb-5 outline-0 mt-1 p-2 ' type="email" id='email' placeholder='Enter your email' name='email' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">Password:</label>
                    <input required onChange={(e) => handleChange(e)} value={details.password} className='border border-zinc-600 rounded-md mb-5 outline-0 mt-1 p-2 ' type="password" id='password' placeholder='Enter your password' name='password' />
                </div>
                <button className='border border-green-400 rounded-md p-2 font-semibold bg-green-200 text-black cursor-ponter'>Login</button>
            </form>
        </main>
    )
}

export default Login