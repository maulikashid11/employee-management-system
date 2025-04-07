import React, { useContext, useEffect, useState } from 'react'
import { EmployeeContext } from '../contexts/EmployeeData'
import { useNavigate } from 'react-router-dom'

const AdminDashboard = () => {
    const navigate = useNavigate()
    const [details, setDetails] = useState({
        name: '',
        email: '',
        password: '',
        title: '',
        description: '',
    })
    const [employees, setEmployees, admin, loggedIn, setLoggedIn] = useContext(EmployeeContext)
    useEffect(() => {
        if (!loggedIn) {
            navigate('/login')
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
    const handleSubmit = (e) => {
        e.preventDefault()
        const { name, email, password, title, description } = details
        const employee = employees.find((e) => e.name === name)
        if (employee) {
            const task = { title, description, status: 'new' }
            const newEmployee = { ...employee, tasks: [...employee.tasks, task], tasksNumber: { ...employee.tasksNumber, newTask: +employee.tasksNumber.newTask + 1 } }
            const newEmployees = employees.map((employee) => {
                if (employee.name === name) {
                    return newEmployee
                } else {
                    return employee
                }
            })
            setEmployees(newEmployees)
        } else {
            const newEmployee = {
                id: employees.length + 1,
                name,
                email,
                password,
                tasksNumber: { newTask: 1, completedTask: 0, failedTask: 0, pendingTask: 0 },
                tasks: [
                    { title, description, status: 'new' }
                ]
            }
            setEmployees([...employees, newEmployee])
        }
        setDetails({
            name: '',
            email: '',
            password: '',
            title: '',
            description: ''
        })
    }
    localStorage.setItem('employees', JSON.stringify(employees))
    const handleChange = (e) => {
        setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    return (
        <main className='w-full min-h-screen p-5 bg-zinc-900 text-white'>
            <div className='mb-10 flex items-center justify-between'>
                <h1 className=' text-3xl font-bold'><span className='font-normal'>Hello</span>, Admin 👋</h1>
                <button onClick={(e) => { logout(e) }} className='cursor-pointer bg-red-500 font-bold p-2 text-xl rounded-md'>Logout</button>
            </div>
            <form action="" onSubmit={(e) => { handleSubmit(e) }} className='border-1 border-green-700 flex flex-col justify-center rounded-lg p-5 md:w-[60%] mx-auto'>
                <h2 className='text-2xl font-bold mb-3'>Create Task</h2>
                <div className='flex flex-col'>
                    <label htmlFor="name">Name:</label>
                    <input required onChange={(e) => handleChange(e)} value={details.name} className='border border-zinc-600 rounded-md mb-5 outline-0 mt-1 p-2 ' type="text" id='name' placeholder='Enter name of employee' name='name' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="email">Email:</label>
                    <input onChange={(e) => handleChange(e)} value={details.email} required className='border border-zinc-600 rounded-md mb-5 outline-0 mt-1 p-2 ' type="email" id='email' placeholder='Enter email of employee' name='email' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="password">Password:</label>
                    <input required onChange={(e) => handleChange(e)} value={details.password} className='border border-zinc-600 rounded-md mb-5 outline-0 mt-1 p-2 ' type="password" id='password' placeholder='Enter password of employee' name='password' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="title">Title:</label>
                    <input required onChange={(e) => handleChange(e)} value={details.title} className='border border-zinc-600 rounded-md mb-5 outline-0 mt-1 p-2 ' type="text" id='title' placeholder='Enter title of Task' name='title' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="description">Description:</label>
                    <input required onChange={(e) => handleChange(e)} value={details.description} className='border border-zinc-600 rounded-md mb-5 outline-0 mt-1 p-2 ' type="text" id='description' placeholder='Enter description of Task' name='description' />
                </div>
                <button className='border border-green-400 rounded-md p-2 font-semibold bg-green-200 text-black cursor-ponter'>Create Task</button>
            </form>
            <div>
                <h2 className='text-2xl font-bold mb-3'>All Tasks</h2>
                <div className="headings flex items-center justify-between border border-zinc-400 p-2 rounded-md mb-3">
                    <p className='text-center border-r-1 border-zinc-400 w-full  md:text-lg text-xs'>Name</p>
                    <p className='text-center border-r-1 border-zinc-400 w-full  md:text-lg text-xs'>New Task</p>
                    <p className='text-center border-r-1 border-zinc-400 w-full  md:text-lg text-xs'>Completed</p>
                    <p className='text-center border-r-1 border-zinc-400 w-full  md:text-lg text-xs'>Pending</p>
                    <p className='text-center  w-full  md:text-lg text-xs'>Failed</p>
                </div>
                {
                    employees.map((employee) => {
                        return <div key={employee.id} className="headings flex items-center justify-between border border-zinc-400 p-2 rounded-md mb-3">
                            <p className='text-center border-r-1 border-zinc-400 w-full'>{employee.name}</p>
                            <p className='text-center text-blue-500 border-r-1 border-zinc-400 w-full'>{employee.tasksNumber.newTask}</p>
                            <p className='text-center text-green-500 border-r-1 border-zinc-400 w-full'>{employee.tasksNumber.completedTask}</p>
                            <p className='text-center text-yellow-500 border-r-1 border-zinc-400 w-full'>{employee.tasksNumber.pendingTask}</p>
                            <p className='text-center text-red-500 w-full'>{employee.tasksNumber.failedTask}</p>
                        </div>
                    })
                }
            </div>
        </main >
    )
}

export default AdminDashboard