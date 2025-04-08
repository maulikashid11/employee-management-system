import React, { useContext, useEffect } from 'react'
import NewTask from './NewTask'
import CompletedTask from './CompletedTask'
import PendingTask from './PendingTask'
import FailedTask from './FailedTask'
import { useNavigate, useParams } from 'react-router-dom'
import { EmployeeContext } from '../contexts/EmployeeData'

const EmployeeDashboard = () => {
    const [employees, setEmployees, admin, loggedIn, setLoggedIn] = useContext(EmployeeContext)
    const navigate = useNavigate()
    useEffect(() => {
        if (!loggedIn) {
            navigate('/user/login')
        }
        localStorage.setItem('employees', JSON.stringify(employees))
    }, [])
    const name = useParams().employeename
    const employee = employees.find((employee) => employee.name === name)
    const logout = (e) => {
        if (loggedIn === employee.name) {
            setLoggedIn(null)
            localStorage.setItem('loggedIn', null)
            navigate('/')
        }
    }

    return (
        <main className='w-full min-h-screen p-5 bg-zinc-900 text-white'>
            <div className='mb-10 flex items-center justify-between'>
                <h1 className=' text-3xl font-bold'><span className='font-normal'>Hello</span>, {employee.name[0].toUpperCase().concat(employee.name.slice(1))} 👋</h1>
                <button onClick={(e) => { logout(e) }} className='cursor-pointer bg-red-500 font-bold p-2 text-xl rounded-md'>Logout</button>
            </div>
            <div className="task-number mb-10 flex justify-center gap-10 flex-wrap">
                <div className='bg-blue-500 min-w-65 p-5 rounded-md'>
                    <h2 className='text-2xl font-bold text-center mb-2'>New Task</h2>
                    <p className='text-3xl text-center font-bold'>{employee.tasksNumber.newTask}</p>
                </div>
                <div className='bg-green-500 min-w-65 p-5 rounded-md'>
                    <h2 className='text-2xl font-bold text-center mb-2'>Completed Task</h2>
                    <p className='text-3xl text-center font-bold'>{employee.tasksNumber.completedTask}</p>
                </div>
                <div className='bg-yellow-500 min-w-65 p-5 rounded-md'>
                    <h2 className='text-2xl font-bold text-center mb-2'>Pending Task</h2>
                    <p className='text-3xl text-center font-bold'>{employee.tasksNumber.pendingTask}</p>
                </div>
                <div className='bg-red-500 min-w-65 p-5 rounded-md'>
                    <h2 className='text-2xl font-bold text-center mb-2'>Failed Task</h2>
                    <p className='text-3xl text-center font-bold'>{employee.tasksNumber.failedTask}</p>
                </div>
            </div>
            <div>
                <h2 className='text-3xl mb-5'>Your Tasks</h2>
                <div className='flex gap-10 flex-wrap justify-center md:justify-start'>
                    {
                        employee.tasks.map((task) => {
                            if (task.status === 'new') {
                                return <NewTask key={task.title} id={employee.id} task={task} />
                            }
                            else if (task.status === 'completed') {
                                return <CompletedTask key={task.title} task={task} />
                            }
                            else if (task.status === 'pending') {
                                return <PendingTask key={task.title} id={employee.id} task={task} />
                            } else {
                                return <FailedTask key={task.title} id={employee.id} task={task} />
                            }
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default EmployeeDashboard